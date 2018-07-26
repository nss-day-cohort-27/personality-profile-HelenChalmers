console.log("Hey Girl!");



// Then when you write your application, read from local storage and use the data to build the three sections in your HTML.

//Saving Data to Local Storage
// const saveData = function(databaseObject, localStorageKey) { const stringifiedDatabase =                JSON.stringify(databaseObject)
//     localStorage.setItem(localStorageKey, stringifiedDatabase)
// }

function setData(nameTag, jsObject){
    let stringifiedObject = JSON.stringify(jsObject);
    localStorage.setItem(nameTag, stringifiedObject);
 }

 setData("Personality", helen);



//retrieving data from Local Storage
// localStorage.getItem()
// const loadbase = function (localStorageKey) {
//     const databaseString = localStorage.getItem(localStorageKey)

//     return JSON.parse(databaseString)
// }

// const helenInfo = loadbase("Helen Info")
// console.log(helenInfo);

function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;
 }
 loadData("Personality", helen);

// document.createElement()
let generalStatement = document.getElementById("GeneralProfile")
let wholeStatement = helen.general.statementsAgree.join();
console.log(wholeStatement);

generalStatement.innerHTML += `<h4>${helen.general.statementsAgree.join()}</h4>`


//-----This is my people section -------------------------------------
let peopleLM = document.getElementById("People")

$(document).ready(function() {
 
    $(helen.peopleLikeMe[0]).owlCarousel({
   
        autoPlay: 3000, //Set AutoPlay to 3 seconds
   
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
   
    });
   
  });





// ------This is my communication with others ----------
let commWithOthers = document.getElementById("Communication");









// You must use Flexbox to layout your page structure.
// You must push to Github and notify your lead instructor when you are done.