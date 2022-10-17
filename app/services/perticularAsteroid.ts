// const baseURL = 'https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY'
const baseURL = 'https://api.nasa.gov/neo/rest/v1/neo/'
const API_KEY = 'N3bUN2E6BTjOisu1yy8AOFToBx72Ufk8GhVbnWHF';

export const perticularAsteroid = async (payload: string) => {
    console.log("in service", payload)
    let result = null;
    try {
        if(payload) {
            const response = await fetch(`${baseURL}${payload}?api_key=${API_KEY}`);
            // console.log('response', response);
            const JSONResponse = await response.json();
            // console.log('JSONResponse', JSONResponse);
            if(!JSONResponse.error) {
                console.log('Asteroid data fetched succsessfully')
                result = JSONResponse
            } else {
                console.log('No such asteroid')
            }
        } else {
            console.log("Could not get payload");
        }
        
    } catch (error) {
        console.log(error);
    }
    return result;
}

// https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY
// https://api.nasa.gov/neo/rest/v1/neo/{{ENTER_ASTEROID_ID_HERE}}?api_key={{
// YOUR_API_KEY}}
// https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=N3bUN2E6BTjOisu1yy8AOFToBx72Ufk8GhVbnWHF
