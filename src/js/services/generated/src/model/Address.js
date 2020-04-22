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
 * The Address model module.
 * @module model/Address
 * @version 0.0.0
 */
class Address {
    /**
     * Constructs a new <code>Address</code>.
     * @alias module:model/Address
     * @param street {String} 
     * @param _number {String} 
     * @param zip {module:model/Address.ZipEnum} 
     * @param city {module:model/Address.CityEnum} 
     * @param country {module:model/Address.CountryEnum} 
     */
    constructor(street, _number, zip, city, country) { 
        
        Address.initialize(this, street, _number, zip, city, country);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, street, _number, zip, city, country) { 
        obj['street'] = street;
        obj['number'] = _number;
        obj['zip'] = zip;
        obj['city'] = city;
        obj['country'] = country;
    }

    /**
     * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Address} obj Optional instance to populate.
     * @return {module:model/Address} The populated <code>Address</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Address();

            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
            if (data.hasOwnProperty('zip')) {
                obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} street
 */
Address.prototype['street'] = undefined;

/**
 * @member {String} number
 */
Address.prototype['number'] = undefined;

/**
 * @member {module:model/Address.ZipEnum} zip
 */
Address.prototype['zip'] = undefined;

/**
 * @member {module:model/Address.CityEnum} city
 */
Address.prototype['city'] = undefined;

/**
 * @member {module:model/Address.CountryEnum} country
 */
Address.prototype['country'] = undefined;





/**
 * Allowed values for the <code>zip</code> property.
 * @enum {String}
 * @readonly
 */
Address['ZipEnum'] = {

    /**
     * value: "13158"
     * @const
     */
    "13158": "13158"
};


/**
 * Allowed values for the <code>city</code> property.
 * @enum {String}
 * @readonly
 */
Address['CityEnum'] = {

    /**
     * value: "Berlin"
     * @const
     */
    "Berlin": "Berlin"
};


/**
 * Allowed values for the <code>country</code> property.
 * @enum {String}
 * @readonly
 */
Address['CountryEnum'] = {

    /**
     * value: "Germany"
     * @const
     */
    "Germany": "Germany"
};



export default Address;

