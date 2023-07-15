var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it rock",
            "You Give Love a Bad Name"
        ]
    },
    "2549": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "2550": {
        "artist": "Robert Palmer",
        "tracks": [
        ]
    },
    "2551": {
        "album": "ABBA Gold",
    },
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value)
    } else {
        collection[id][prop] = value
    }

    return collection;
}

console.log(updateRecords(2551, "artist", ABBA));
    

    
