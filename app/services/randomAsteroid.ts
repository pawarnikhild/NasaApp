const baseURL = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY';

export const randomAsteroid = async () => {
  let result = null;
  try {
    const response = await fetch(`${baseURL}`);
    // console.log('response', response);
    const JSONResponse = await response.json();
    // console.log('JSONResponse', JSONResponse);
    if (!JSONResponse.error) {
      console.log('Browse data fetched succsessfully');
      var locarArray = JSONResponse;
      var idArray = [];
      for (var i = 0; i < locarArray.near_earth_objects.length; i++) {
        idArray.push(locarArray.near_earth_objects[i].id);
      }
      // console.log('idArray', idArray);
      var randomId = idArray[Math.floor(Math.random() * idArray.length)];
      console.log(randomId);
      result = randomId;
    } else {
      console.log('Error in fetching browse data');
    }
  } catch (error) {
    console.log(error);
  }
  return result;
};

// https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY
// https://api.nasa.gov/neo/rest/v1/neo/{{ENTER_ASTEROID_ID_HERE}}?api_key={{
// YOUR_API_KEY}}
// https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=N3bUN2E6BTjOisu1yy8AOFToBx72Ufk8GhVbnWHF
