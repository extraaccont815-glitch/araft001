import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define mongo_uri in env variables");
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
        dbName: "arafthyd_db",
        bufferCommands: false,
      })
      .then((mongoose) => {
        return mongoose;
      })
      .catch((err) => {
        throw err;
      });
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}
