import {UICollectionResponse, OptionElement, UIElement} from './FilterSpec';

/*
 Example payload:

 {
    "UIElements": [
         {
             "InputType": "input",
             "HtmlTag": "input",
             "Id": "username",
             "Name": "username",
             "Required": true,
             "Label": "Username:",
             "Value": "Type your username",
             "Order": 1,
             "Options": null
             "IsMultiple": false
         },

         {
             "InputType": "password",
             "HtmlTag": "input",
             "Id": "password",
             "Name": "password",
             "Required": true,
             "Label": "Password:",
             "Value": "Type your password",
             "Order": 2,
             "Options": null,
             "IsMultiple": false
         }
    ]
 }

 Google Oauth2 example:

 {
    "UIElements": [
         {
             "HtmlTag": "input",
             "InputType": "button",
             "Id": "button",
             "Name": "oauth2-button",
             "Required": true,
             "Label": "Login with your account",
             "Value": "https://accounts.google.com/o/oauth2/auth?client_id=CLIENT_ID&scope=https://www.googleapis.com/auth/contacts.readonly&response_type=code&redirect_uri=http://localhost:8888/api/membersplugin/oauth2&access_type=offline&state=",
             "Order": 1,
             "Options": null,
             "IsMultiple": false
         }
    ]
 }


 */




//Export again just for consistency's sake since same ones are used
export {UICollectionResponse};
export {OptionElement};
export {UIElement};
