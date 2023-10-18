import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://moin1901:moin1901@cluster0.sdbrhng.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "Netflix-clone",
      }
    );

    console.log("mongodb is connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;
