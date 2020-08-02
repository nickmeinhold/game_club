import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

import { apiProxyApp } from './api_proxy';

// endpoint for acting as proxy for IGDB API calls 
export const apiProxy = functions.https.onRequest(apiProxyApp);
