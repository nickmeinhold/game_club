import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import * as rp from 'request-promise';
import request = require('request');
import { GameResult } from './api_client/igdbapi';

export const apiProxyApp = express();

// Act as proxy for an API call to the IGDB API 
const proxyAPICall = async (req: any, res: any) => {
  try {
    
    const response = await makeAPICall();
    console.log('response: '+response);
    const arrayData : Uint8Array = response;
    console.log(arrayData.length);
    const gameResult = GameResult.decode(arrayData);
    console.log('gameResult: ' + gameResult);

    // const encodedResponse = Buffer.from(response).toString('base64');

    return res.send(gameResult);
  } catch(error) {
    console.error(error);
    return res.status(500).send('Something went wrong while attempting to proxy the API call.');
  }
};

function makeAPICall(section: string = 'games') {
  const options : request.UriOptions & rp.RequestPromiseOptions = {
    method: 'POST',
    uri: 'https://api-v3.igdb.com/' + 'games' + '.pb',
    headers: {
      'user-key': functions.config().igdbapi.userkey,
      'content-type': 'application/octet-stream'
    },
    body: 'fields name; limit 10;'
  };

  return rp(options);
}

apiProxyApp.use(cors({ origin: true }));
apiProxyApp.use(proxyAPICall);