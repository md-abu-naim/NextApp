
import { MongoClient, ServerApiVersion } from 'mongodb';


export const collectionName = {
    products : 'products',
    orders: 'orders',
    users: 'users'
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const dbConnect = (collectionName) => {
    const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.zyfftle.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    return client.db('NatureGlow').collection(collectionName);
}

export default dbConnect;
