

/*
 Example

 file type

 {
     "Name": "Template File Plugin",
     "Description": "This is a template file plugin",
     "Image": "templateicon.png",
     "NeedsAuth": false,
     "HasFilters": true,
     "PluginType": 1,
     "PluginTypeDescription": "file"
 }

 -----
 api type

 {
     "Name": "Template Api Plugin",
     "Description": "This is a tempate plugin",
     "Image": "templateicon.png",
     "NeedsAuth": true,
     "HasFilters": true,
     "PluginType": 2,
     "PluginTypeDescription": "api"
 }

 -----
 oauth2-api type

 {
     "Name": "Template OAuth2 Api Plugin",
     "Description": "This is a template OAuth2 Api plugin",
     "Image": "templateicon.png",
     "NeedsAuth": true,
     "HasFilters": true,
     "PluginType": 3,
     "PluginTypeDescription": "oauth2-api"
 }


 */


/**
 * Response payload type returned when plugin details are requested
 */
export interface PluginDetails{
    Name: string,
    Description: string,
    Image: string,
    NeedsAuth: boolean,
    HasFilters: boolean,
    PluginType: '1' | '2' | '3'
    PluginTypeDescription: 'file' | 'api' | 'oauth2-api'
}
