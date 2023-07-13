const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://gachohinderitu005:<password>@blogappdb.ouxksjd.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB connected"))
  .catch((error) => console.error("DB connection error:", error));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error ${err.message}`);
});
