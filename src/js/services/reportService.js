class ReportService {
  static serviceUrl() {
    return "https://hierstinkts.wilhelm-gibt-keine-ruh.de/api/v0/report"
  }

  static async postReport(report) {
    const response = await this.executePostRequest(this.serviceUrl(), {report: report});
    if (response.ok) {
      console.log(JSON.stringify(response));
      return true;
    }
    else {
      throw response.statusText;
    }
  }

  static executePostRequest(url = "", bodyObject = {}) {
    return fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyObject)
    });
  }
}