const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

cognitoidentityserviceprovider.adminInitiateAuth(
  { 
     AuthFlow: 'ADMIN_NO_SRP_AUTH', 
     ClientId: '3k3f71m59b36fg0fj8qlb49a0b', 
     UserPoolId: 'us-east-1_scAXWVzif', 
     AuthParameters: 
       { USERNAME: 'jorge.herrera.cabrera@gmail.com', PASSWORD: 'kerw0nZ!' } 
  },  function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  }); 

var params = {
  ChallengeName: 'NEW_PASSWORD_REQUIRED', /* required */
  ClientId: '3k3f71m59b36fg0fj8qlb49a0b', /* required */
  ChallengeResponses: {
    'USERNAME': 'jorge.herrera.cabrera@gmail.com',
    'NEW_PASSWORD': 'kerw0nZ!'
  },
  Session: `mjy728AqvHZ_RhY4h4O1M9CmP0Eg7sG8XoK9GDA4ac66Q7VluHrmXpiwmT0Dwq9lVZpoT4hanCXnCMAjZHPoeag_BBAoa34o7wEwqCSG8WIjNGXbgRQ-19Li4bEgCc_88BYD8enSEJ0oCCoNnh
  4ll3l7fGRBRk1Xq1-snOt8bc3esqVKxP8fFV21mv4MyqHdkZ0tTpKEPBNpN4axyyOG4IoGS-ICIxXqJBB31UM2bBfzdTpOLYoEbz2-HRFYhwOmz-QeCGV-gtUGE6NF7MiZJZ2PzEip6vNIr1RH0Kq5
  O7yAmukQywC1CYaXa-NiJqhy9dxDCJjTbO5HKNoVXH635r-_knFy5WP7d7rSQH3NFEW-Hiis7WCdP9kOCT8hlQQfrsz2gyDQFGo-C7z2ijriP4GWPjhlEL7fPNh-6_4xhL2pkHzN3B_UWcddgeGXbZ
  CEGC_oJZYZN3QPnWAb1jqQCsReu5X-onBkXlL0VbEsxzqpv_Jrfi17W4sZ2vlnrwDhJ5kqN1yCFBRDNK2gbO0jmuNCcGK0S-kca1FkYkxNoPerAI-5O-_dZdXra4xcJwFGA28yOLywVuaIsb-VMtIu
  TW39ZPqmZAf4ge95_Z93OCg6d_EwYWMUihe4BsCi-iAfFPb4CGJMjdwtKjAQ4vZLo1hw658NMBMRHTORY7kcSuWAIm17f1lbwsL_qPbQSYOGzW2xeEScr-XtqoEyWQYlww202kLAFpSc7DOXvA3YcN
  DjVqXHeDBqVRwG_9Ybd7cvn2W_dYe49j7JtMQRwpbXCfiO1F3_FT6T0vabMpjGI0fAEVerxDi956M7lPuvP7STH8LT6ejpNNoTEDV0iXgMj9wQPbkCh-J2MiPrcWpnEluk6rvXkYbfMEIeqeFBv5ea
  Mm1aQA`
};
cognitoidentityserviceprovider.respondToAuthChallenge(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});