import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI in env variables"); 
}
let cached = (global as any).mongoose;

if (!cached) {
    
    cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
    if (mongoose.connection.readyState === 1) return;
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(MONGODB_URI, {
                dbName: "Araft",
                bufferCommands: false,
            })
            .then((mongoose) => {
                console.log("Connected to MongoDB");
                return mongoose;
            })
            .catch((err) => {
                console.log("MongoDB connection error:", err);
            });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}