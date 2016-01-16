/**
 * Created by charlesgrisar on 08/09/15.
 */

if (Relationships.find().count() === 0) {
    Relationships.insert(
        {
            "name" : "Les Vins Personnalisés",
            "addresses" : [
                {
                    "addressType" : ["default"],
                    "address1" : "Falconrui, 15",
                    "city" : "Antwerp",
                    "zip" : "2000",
                    "country" : "Belgium",
                    "contacts" : [
                        {
                            "name" : "Charles Grisar",
                            "phone": "0473 98 05 96",
                            "email" : "charles@levipe.be"
                        }
                    ]
                },
                {
                    "addressType" : ["invoice"],
                    "contacts" : [
                        {
                            "name" : "Accounting",
                            "email" : "accounting@levipe.be"
                        }
                    ]
                },
                {
                    "addressType" : ["delivery"],
                    "address1" : "Herbekestraat, 6",
                    "city" : "Hemiksem",
                    "zip" : "2620",
                    "country" : "Belgium"
                }
            ]
        }
    );
    Relationships.insert({
        "name" : "Cafe Theatre",
        "addresses" : [
            {
                "addressType" : ["default"],
                "address1" : "Schouwburgstraat, 5",
                "city" : "Gent",
                "zip" : "9000",
                "country" : "Belgium",
                "tel" : "0474 96 05 98",
                "contacts" : [
                    {
                        "name" : "Dieter Vandermeeren",
                        "email" : "dieter@cafetheatre.be"
                    }
                ]
            },
            {
                "addressType" : ["invoice"],
                "contacts" : [
                    {
                        "name" : "nancy",
                        "email" : "nancy@cafetheatre.be"
                    }
                ]
            },
            {
                "addressType" : ["delivery"],
                "address1" : "Kouter, 25",
                "city" : "Gent",
                "zip" : "9000",
                "country" : "Belgium"
            }
        ]
    });
};

if (Categories.find().count() === 0) {
    Categories.insert({
        relationshipTags: [
            'Particulier',
            'Horeca',
            'Société',
            'Revendeur',
            'Importateur',
            'Investisseur'
            ],
        addressTypes: [
            'Default',
            'Invoice',
            'Delivery',
            'Contact'
        ],
        contactTags: [
            'C-level',
            'Management',
            'Execution',
            'Sales',
            'Marketing',
            'Procurement',
            'Accounting',
            'Supply Chain'
        ]
    })
}