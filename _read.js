var AWS = require('aws-sdk')
AWS.config.update({
    region: "US East (Ohio)",
    endpoint: "http://localhost:8000", // need to change the endpoint 
    accessKeyId:"AEQJT",
    secretAccessKey:"4PBJ0"
  });
  

  var docClient = new AWS.DynamoDB.DocumentClient();

  var params = {
    TableName: 'student',
    Key:{
        "roll_no": "17h1",
    }
};

docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
});