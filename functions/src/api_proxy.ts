import * as express from 'express';
import * as cors from 'cors';
import * as rp from 'request-promise';

export const apiProxyApp = express();

// Get the code from the request, call retrieveAuthToken and return the response
const proxyAPICall = async (req: any, res: any) => {
  try {

    // If we can't get a code and state from the request it's probably an error message, just send back the original url
    if(req.query.code === null || req.query.code === undefined || req.query.state === null || req.query.state === undefined) {
      return res.send(req.originalUrl);
    }
    
    const response = await makeAPICall(req.query.code);

    // Close the github auth window, the entry in database will update the UI of the original window 
    return res.send(response);
  } catch(error) {
    console.error(error);
    return res.status(500).send('Something went wrong while attempting to proxy the API call.');
  }
};

// Exchange the code from github (plus a secret) for an auth token 
function makeAPICall(section: string = 'games') {
  // 'user-key': functions.config().igdbapi.userkey 
  return rp({
    method: 'POST',
    uri: 'https://api-v3.igdb.com/' + 'games' + '.pb',
    body: 'fields name; limit 10;',
    json: false,
  });
}

apiProxyApp.use(cors());
apiProxyApp.use(proxyAPICall);