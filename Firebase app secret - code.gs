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
