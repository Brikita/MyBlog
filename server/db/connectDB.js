const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://brikita:brian12@test.nlyxchf.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }, 600000
  )
  .then(() => console.log("DB connected"))
  .catch((error) => console.error("DB connection error:", error));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error ${err.message}`);
});
