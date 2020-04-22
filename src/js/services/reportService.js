class ReportService {
    static serviceUrl() {
        return "https://hierstinkts.wilhelm-gibt-keine-ruh.de/api"
    }

    static async postReport(report) {
        const response = await this.executePostRequest(this.serviceUrl(),report);
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
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(bodyObject)
        });
      }
}