import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import * as https from 'https';
import { GameResult } from './api_client/igdbapi';
import { DatabaseService } from '../database/database';

export const apiProxyApp = express();

// Act as proxy for an API call to the IGDB API 
const proxyAPICall = async (req: any, res: any) => {
  try {
    const dbService = new DatabaseService('');

    const result = await makeAPICall('games', 'fields name; limit 10;');

    const gameResult = GameResult.decode(result as Uint8Array);
    
    await dbService.save(gameResult);

    return res.send(result);
  } catch(error) {
    console.error(error);
    return res.status(500).send('Something went wrong while attempting to proxy the API call.');
  }
};

function makeAPICall(section: string, body: string) {
  return new Promise((resolve, reject) => {

    const options : https.RequestOptions = {
      method: 'POST',
      hostname: 'api-v3.igdb.com',
      path: '/' + section + '.pb',
      headers: {
        'user-key': functions.config().igdbapi.userkey,
        'content-type': 'application/octet-stream'
      }
    };

    const req = https.request(options, (res) => {
      if(res.statusCode !== 200) reject(res);
    
      res.on('data', (d) => {
        resolve(d);
      })
    });

    req.write(body);
    req.end();
  
  });
}

apiProxyApp.use(cors({ origin: true }));
apiProxyApp.use(proxyAPICall);
