class LocationService {
    static serviceUrl() {
        return "https://nominatim.openstreetmap.org/"
    }

    static async getCoordinatesForAddress(address) {
        const query = `search?country=${address.country}&city=${address.city}&postalcode=${address.zip}&street=${address.number} ${address.street}&format=json&addressdetails=1`;
        const response = await this.executeGetRequest(query);
        if (response.ok) {
            const body = await response.json();
            if (body.length < 1) {
                throw new AddressNotFoundException();
            }
            const validEntries = body.filter((e) => e.address.postcode === "13158");
            if (validEntries.length < 1) {
                throw new AddressNotFoundException();
            }

            return {
                latitude: validEntries[0].lat,
                longitude: validEntries[0].longitude
            };
        }
        else {
            throw response.statusText;
        }
    }

    static async getAddressForCoordinates(coordinates) {
        const query = `reverse?lat=${coordinates.latitude}&lon=${coordinates.longitude}&format=json`;
        const response = await this.executeGetRequest(query);
        if (response.ok) {
            const body = await response.json();
            if (body.address) {
                const address = body.address;
                if (address.postcode != "13158") {
                    throw "Only Wilhelmsruh is supported";
                }
                return {
                    country: address.country,
                    city: address.state,
                    zip: address.postcode,
                    street: address.road,
                    number: address.house_number
                }
            }
            return undefined;
        }
        else {
            throw response.statusText;
        }
    }

    static executeGetRequest(query) {
        const uri = encodeURI(LocationService.serviceUrl() + query);
        return fetch(uri);
    }
}