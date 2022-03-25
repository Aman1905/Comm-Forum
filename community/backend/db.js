const mongoose = require('mongoose');
const url = "mongodb+srv://aman_chopra:pYlzDTYEO0vqTL8k@communityforum.j37u1.mongodb.net/CommForum?retryWrites=true&w=majority"

module.exports.connect =() => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("monog db connected successfully");
    }).catch((error) => console.log(error))
}