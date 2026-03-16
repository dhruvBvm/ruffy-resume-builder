import mongoose from "mongoose";

mongoose
  .connect(
    `mongodb+srv://dhruvpbvminfotech_db_user:CmFNKf5a45555bDwNsgtsc1452kg465dd@cluster0.85rx1v7.mongodb.net/?appName=Cluster0`,
  )
  .then((result) => {
    console.log("Connected to MONGODB server");
  })
  .catch((error) => {
    console.log(error);
  });
