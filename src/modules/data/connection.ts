import "server-only";

import mongoose from "mongoose";

export class Connection {
  private static instance: Connection;
  private mongoUrl: string;
  private dbName: string;
  private isConnected: boolean = false;

  private constructor() {
    this.mongoUrl = process.env.MONGODB_URL as string;
    this.dbName = process.env.DATABASE_MONGO_NAME as string;
  }

  static getInstance(): Connection {
    if (!Connection.instance) {
      Connection.instance = new Connection();
    }
    return Connection.instance;
  }

  async connect(): Promise<boolean> {
    if (this.isConnected) {
      console.log("Mongo already connected");
      return true;
    }

    try {
      await mongoose.connect(this.mongoUrl, {
        dbName: this.dbName,
      });

      this.isConnected = true;
      console.log("Connected to DB:", mongoose.connection.name);
      return true;
    } catch (error) {
      console.error("Mongo connection error:", error);
      throw error;
    }
  }
}
