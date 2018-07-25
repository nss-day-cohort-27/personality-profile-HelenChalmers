console.log("Hey Girl!");



// Then when you write your application, read from local storage and use the data to build the three sections in your HTML.

//Saving Data to Local Storage
const saveData = function(databaseObject, localStorageKey) { const stringifiedDatabase =                JSON.stringify(databaseObject)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveData(helen, "Helen Info")

//retrieving data from Local Storage
// localStorage.getItem()
const loadbase = function (localStorageKey) {
    const databaseString = localStorage.getItem(localStorageKey)

    return JSON.parse(databaseString)
}

const helenInfo = loadbase("Helen Info")
console.log(helenInfo);

// document.createElement()
let generalStatement = document.getElementById("GeneralProfile")
let wholeStatement = helen.general.statementsAgree.join();
console.log(wholeStatement);

generalStatement.innerHTML += `<h4>${helen.general.statementsAgree.join()}</h4>`



let peopleLM = document.getElementById("People")


let commWithOthers = document.getElementById("Communication")

// You must use Flexbox to layout your page structure.
// You must push to Github and notify your lead instructor when you are done.