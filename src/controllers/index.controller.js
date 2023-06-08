import { client } from '../db.js';

export const testDb = async (req, res) => {
    const [result] = await client.query('SELECT "connected!" AS Result');
    res.json(result);
};
