class WeatherService {
  static serviceUrl() {
    return "https://api.open-meteo.com/v1/forecast";
  }

  // WMO weather interpretation code -> [icon, German label]
  static describe(code) {
    const map = {
      0: ["☀️", "klar"],
      1: ["🌤️", "überwiegend klar"],
      2: ["⛅", "teils bewölkt"],
      3: ["☁️", "bewölkt"],
      45: ["🌫️", "Nebel"],
      48: ["🌫️", "gefrierender Nebel"],
      51: ["🌦️", "leichter Niesel"],
      53: ["🌦️", "Niesel"],
      55: ["🌦️", "starker Niesel"],
      56: ["🌧️", "gefrierender Niesel"],
      57: ["🌧️", "gefrierender Niesel"],
      61: ["🌦️", "leichter Regen"],
      63: ["🌧️", "Regen"],
      65: ["🌧️", "starker Regen"],
      66: ["🌧️", "gefrierender Regen"],
      67: ["🌧️", "gefrierender Regen"],
      71: ["🌨️", "leichter Schneefall"],
      73: ["🌨️", "Schneefall"],
      75: ["❄️", "starker Schneefall"],
      77: ["🌨️", "Schneegriesel"],
      80: ["🌦️", "leichte Schauer"],
      81: ["🌧️", "Schauer"],
      82: ["⛈️", "heftige Schauer"],
      85: ["🌨️", "Schneeschauer"],
      86: ["❄️", "starke Schneeschauer"],
      95: ["⛈️", "Gewitter"],
      96: ["⛈️", "Gewitter mit Hagel"],
      99: ["⛈️", "schweres Gewitter mit Hagel"]
    };
    return map[code] || ["🌡️", "unbekannt"];
  }

  // Wind direction in degrees (meteorological, "from") -> German 8-point compass abbreviation.
  static compass(degrees) {
    const points = ["N", "NO", "O", "SO", "S", "SW", "W", "NW"];
    return points[Math.round(degrees / 45) % 8];
  }

  static async getCurrent(coordinates) {
    const url = `${this.serviceUrl()}?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}`
      + "&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m"
      + "&wind_speed_unit=ms&timezone=auto";
    const response = await this.executeGetRequest(url);
    const body = await response.json();
    return {
      temperatureC: body.current.temperature_2m,
      weatherCode: body.current.weather_code,
      windSpeed: body.current.wind_speed_10m,
      windDirection: body.current.wind_direction_10m
    };
  }

  // date: "YYYY-MM-DD", time: "HH:MM" (local). Returns the hourly sample nearest that time.
  static async getHistorical(coordinates, date, time) {
    const url = `${this.serviceUrl()}?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}`
      + `&hourly=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m`
      + `&wind_speed_unit=ms&start_date=${date}&end_date=${date}&timezone=auto`;
    const response = await this.executeGetRequest(url);
    const body = await response.json();
    const targetMs = new Date(`${date}T${(time || "12:00").slice(0, 5)}`).getTime();
    let best = 0;
    let bestDiff = Infinity;
    for (let i = 0; i < body.hourly.time.length; i++) {
      const diff = Math.abs(new Date(body.hourly.time[i]).getTime() - targetMs);
      if (diff < bestDiff) {
        bestDiff = diff;
        best = i;
      }
    }
    return {
      temperatureC: body.hourly.temperature_2m[best],
      weatherCode: body.hourly.weather_code[best],
      windSpeed: body.hourly.wind_speed_10m[best],
      windDirection: body.hourly.wind_direction_10m[best]
    };
  }

  static async executeGetRequest(url) {
    const response = await fetch(url, { method: "GET", cache: "default" });
    if (!response.ok) {
      throw response.statusText;
    }
    return response;
  }
}
