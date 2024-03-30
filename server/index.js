require("dotenv").config();
const PORT = process.env.PORT || 5001;
const app = require('./app')
const connectDB = require("./config/db");

connectDB()
  .then(() => {
    app.on('error',(error)=>{
        console.log(`Error: ${error}`);
    })
    app.listen(PORT, () => {
        console.log(`app is listening on port ${PORT}`);
      });
  })
  .catch((error) => {
    console.log(`Connection Failed: ${error.message}`);
  });

