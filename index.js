function findMatching(arr, query ) {
    const matchingNamesArray = arr.filter(name => name.toLowerCase() === query.toLowerCase());
    
    return matchingNamesArray;
}

function fuzzyMatch(arr, query ) {
    const matchingNamesArray = arr.filter(name => name.toLowerCase().indexOf(query.toLowerCase()) == 0);

    return matchingNamesArray;
}

function matchName(arr, query ) {
    const matchingNamesArray = arr.filter(driver => driver.name.toLowerCase() === query.toLowerCase());

    return matchingNamesArray;
}