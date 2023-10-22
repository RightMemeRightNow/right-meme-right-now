import { MongoClient } from 'mongodb';

const maxReconnectAttempts = 5;
const reconnectDelay = 1000;
let cachedClient = null;

export async function getMongoClient() {
    await manageConnection();
    return cachedClient;
}

async function manageConnection() {
    if (cachedClient) {
        return;
    }

    let reconnectAttempts = 0;
    const connectWithRetry = async () => {
        const client = new MongoClient(process.env.MONGODB_URI);

        try {
            await client.connect();
            cachedClient = client;
            return client;
        } catch (err) {
            console.error('Error connecting to MongoDB:', err);

            if (reconnectAttempts < maxReconnectAttempts) {
                console.info(`Reconnection attempt ${reconnectAttempts + 1} in ${reconnectDelay / 1000} seconds...`);
                await new Promise((resolve) => setTimeout(resolve, reconnectDelay));
                reconnectAttempts++;
                return connectWithRetry();
            }

            throw err;
        }
    }

    return connectWithRetry();
}
