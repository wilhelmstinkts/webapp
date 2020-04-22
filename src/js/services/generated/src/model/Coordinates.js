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

import ApiClient from '../ApiClient';

/**
 * The Coordinates model module.
 * @module model/Coordinates
 * @version 0.0.0
 */
class Coordinates {
    /**
     * Constructs a new <code>Coordinates</code>.
     * @alias module:model/Coordinates
     * @param longitude {Number} 
     * @param latitude {Number} 
     */
    constructor(longitude, latitude) { 
        
        Coordinates.initialize(this, longitude, latitude);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, longitude, latitude) { 
        obj['longitude'] = longitude;
        obj['latitude'] = latitude;
    }

    /**
     * Constructs a <code>Coordinates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Coordinates} obj Optional instance to populate.
     * @return {module:model/Coordinates} The populated <code>Coordinates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Coordinates();

            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} longitude
 */
Coordinates.prototype['longitude'] = undefined;

/**
 * @member {Number} latitude
 */
Coordinates.prototype['latitude'] = undefined;






export default Coordinates;

