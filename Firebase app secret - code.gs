// https://developers.google.com/apps-script/guides/web
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');  
}
// https://developers.google.com/apps-script/guides/html/communication#forms
// HTML Service: Communicate with Server Functions
// 
function addNewUserTofireblog() {
  var dbUrl = "https://eojjigas.firebaseio.com/rest/saving-data/fireblog/";
  var secret = PropertiesService.getScriptProperties().getProperty("fb-secret");
  var path = "/users/"; 
  
  var userData =  {
    "alanisawesome": {
      "name": "Alan Turing",
      "birthday": "June 23, 1912"
    }
  };  
  var params = {
    method: "PUT",
    payload : JSON.stringify(userData)
  }
  UrlFetchApp.fetch(dbUrl + path + ".json?auth=" + secret, params);
}




/*
Real-time notifications in add-ons with Firebase
July 29, 2015
http://googleappsdeveloper.blogspot.kr/2015/07/real-time-notifications-in-add-ons-with.html
*/
function addNewUserToFirebase() {
  var dbUrl = "https://eojjigas.firebaseio.com/"; // "https://test-apps-script.firebaseio.com";
  var secret = PropertiesService.getScriptProperties().getProperty("fb-secret");
  var path = "/users/";
 
// https://developers.google.com/apps-script/reference/base/session#getActiveUser()
 // Log the email address of the person running the script.
 var email = Session.getActiveUser().getEmail();
// Logger.log(email);
  
  var userData = {
    Kimhuysep:{
      firstName:"Kim", 
      lastName:"Huysep",
      email:email,
      registrationDate: new Date()
    }
  };  
  
  var params = {
    method: "PUT",
    payload : JSON.stringify(userData)
  }
   UrlFetchApp.fetch(dbUrl + path + ".json?auth=" + secret, params);
}
