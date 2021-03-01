class ReportService {
  static serviceUrl() {
    return "api/v0/report"
  }

  static async postReport(report) {
    const response = await this.executePostRequest(this.serviceUrl(), {report: report});
    if (response.ok) {
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