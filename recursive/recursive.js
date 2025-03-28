const json =
    [
        {
            "name": "Nazmus",
            "job": "Software Engineer",
            "location": {
                "city": "Boston",
                "state": "Massachusetts",
            }
        },
        {
            "name": "Bill",
            "job": "CEO",
            "city": "Seattle",
            "state": "Washington"
        }
    ];

iterateObject(json);

function iterateObject(obj) {
    for (prop in obj) {
        if (typeof (obj[prop]) == "object") {
            iterateObject(obj[prop]);
        } else {
            if (prop == "city") {
                console.log(obj[prop]);
            }
        }
    }
}