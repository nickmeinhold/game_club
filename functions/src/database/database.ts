import * as admin from 'firebase-admin';
const db = admin.firestore();

import { GameResult } from '../api/api_client/igdbapi';

export class DatabaseService {
    uid: string;

    constructor(userId: string) {
        this.uid = userId;
    }

    async save(gameResult: GameResult) {
        const batch = db.batch();

        gameResult.games.forEach((game) => {
            const docRef = db.collection('games').doc();
            batch.set(docRef, game);
        });
        await batch.commit();
    }
}