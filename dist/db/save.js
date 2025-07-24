"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToDB = saveToDB;
const mongodb_1 = require("mongodb");
const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || 'bot_football';
const collectionName = process.env.MONGODB_COLLECTION || 'bot_data';
let client = null;
async function getClient() {
    if (!client) {
        client = new mongodb_1.MongoClient(uri);
        await client.connect();
    }
    return client;
}
async function saveToDB(data) {
    try {
        const client = await getClient();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(data);
        console.log('Saved to MongoDB:', result.insertedId);
        return result.insertedId;
    }
    catch (error) {
        console.error('MongoDB save error:', error);
        throw error;
    }
}
