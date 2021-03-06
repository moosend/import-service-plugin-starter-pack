define({ "api": [
  {
    "type": "get",
    "url": "/api/plugin/details",
    "title": "Request Plugin Details",
    "name": "GetDetails",
    "group": "Plugin_Info",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of the plugin.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Description of the plugin.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Image",
            "description": "<p>Image thumbnail.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "NeedsAuth",
            "description": "<p>true.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "HasFilters",
            "description": "<p>true.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PluginType",
            "description": "<p>'1'.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PluginTypeDescription",
            "description": "<p>'oauth2-api'.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"Name\": \"Salesforce Plugin\",\n     \"Description\": \"Plugin Description\",\n     \"Image\": \"\",\n     \"NeedsAuth\": true,\n     \"HasFilters\": true,\n     \"PluginType\": 3,\n     \"PluginTypeDescription\": \"oauth2-api\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n     \"message\": \"Server Error\",\n     \"status\": \"500\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/routes/routes.js",
    "groupTitle": "Plugin_Info"
  }
] });
