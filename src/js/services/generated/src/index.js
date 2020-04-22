/**
 * Stink Reporter
 * Report when and where it stinks and query for past stinks.
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Address from './model/Address';
import Coordinates from './model/Coordinates';
import InlineObject from './model/InlineObject';
import Report from './model/Report';
import ReportLocation from './model/ReportLocation';
import Reporter from './model/Reporter';
import Stink from './model/Stink';
import ReportApi from './api/ReportApi';


/**
* Report_when_and_where_it_stinks_and_query_for_past_stinks_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var StinkReporter = require('index'); // See note below*.
* var xxxSvc = new StinkReporter.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new StinkReporter.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new StinkReporter.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new StinkReporter.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address,

    /**
     * The Coordinates model constructor.
     * @property {module:model/Coordinates}
     */
    Coordinates,

    /**
     * The InlineObject model constructor.
     * @property {module:model/InlineObject}
     */
    InlineObject,

    /**
     * The Report model constructor.
     * @property {module:model/Report}
     */
    Report,

    /**
     * The ReportLocation model constructor.
     * @property {module:model/ReportLocation}
     */
    ReportLocation,

    /**
     * The Reporter model constructor.
     * @property {module:model/Reporter}
     */
    Reporter,

    /**
     * The Stink model constructor.
     * @property {module:model/Stink}
     */
    Stink,

    /**
    * The ReportApi service constructor.
    * @property {module:api/ReportApi}
    */
    ReportApi
};
