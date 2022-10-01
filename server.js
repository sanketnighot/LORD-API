// require('dotenv/config');
// const mongoose = require('mongoose');
const app = require('./app');
// mongoose.connect("mongodb+srv://propert-test:propert12345@cluster0.uvnik.mongodb.net/propert-test?retryWrites=true&w=majority", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     }).then(()=> {
//         console.log('Connected to LOL MongoDb Server ...')
//     }).catch((err) =>{
//         console.log(`MongoDb Connection Failed: ${err}`);
//     });


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT} ...`);
});