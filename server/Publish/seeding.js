/**
 * Created by charlesgrisar on 08/09/15.
 */

if (Relationships.find().count() === 0) {
    Relationships.insert({
        name: 'Whatever',
        address: 'Falconrui 15'
    });
    Relationships.insert({
        name: 'LVP',
        address: 'Callebeekstraat 257'
    });
    Relationships.insert({
        name: 'Grisar & Co',
        address: 'Herbekelaan 6'
    });
}