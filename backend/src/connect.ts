import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

interface MongooseConnectOptions {
   useNewUrlParser: boolean;
   useUnifiedTopology: boolean;
}

export default async function connect() {
   try {
      const options: MongooseConnectOptions = {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      };

      await mongoose.connect(process.env.MONGODB_URI!, options as any);
      console.log("Connected to MongoDB");
   } catch (error) {
      console.error("Error connecting to MongoDB:", error);
   }
}
