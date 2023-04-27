const dynamoose = require('dynamoose');

const bugSchema = new dynamoose.Schema({
  species_name: String,
  can_fly: Boolean,
  bites_humans: Boolean,
  id: String
});

const bugModel = dynamoose.model('Bug', bugSchema);

// exports.handler = async (event) => {
//   console.log('CREATE BUG EVENT OBJECT: ', event);
//   // TODO: IMPLEMENT
//   const response = {
//     statusCode: 500,
//     body: JSON.stringify('CREATE BUG ERROR')
//   }

//   if (event.body) {
//     response.body = JSON.stringify('ADDING BUG RECORD');
//   } else {
//     response.body = JSON.stringify('MISSING REQUEST BODY');
//   }
//   return response;
// };
