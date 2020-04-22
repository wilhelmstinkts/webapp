# StinkReporter.ReportApi

All URIs are relative to *https://hierstinkts.wilhelm-gibt-keine-ruh.de/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getReports**](ReportApi.md#getReports) | **GET** /v0/report | 
[**postNewReport**](ReportApi.md#postNewReport) | **POST** /v0/report | 



## getReports

> [Report] getReports()



Get previously saved reports

### Example

```javascript
import StinkReporter from 'stink_reporter';

let apiInstance = new StinkReporter.ReportApi();
apiInstance.getReports((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Report]**](Report.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postNewReport

> postNewReport(inlineObject)



Save new report to database and write email

### Example

```javascript
import StinkReporter from 'stink_reporter';

let apiInstance = new StinkReporter.ReportApi();
let inlineObject = new StinkReporter.InlineObject(); // InlineObject | 
apiInstance.postNewReport(inlineObject, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: text/plain

