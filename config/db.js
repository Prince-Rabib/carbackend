const mongoose = require('mongoose');
const db = "mongodb+srv://newhost:Mombu1234$@newhost.rnqxy8t.mongodb.net/?retryWrites=true&w=majority";

const connectdb = async () => {
  try {
    await mongoose.connect(db,{
      useNewUrlParser: true,
      useCreateIndex:true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('Mongo connected...');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectdb;
