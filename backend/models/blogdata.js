const mongoose = require("mongoose");
const schema = mongoose.Schema;

const blogschema = new schema({
    blogerName: { type: String, requied: true },
    blogerImg: { type: String, requied: true },
    followCount: { type: Number, requied: true },
    articleTitle: { type: String, requied: true },
    articleDate: { type: Date, requied: true },
    comments: { type: String, requied: true },
    content: { type: String, requied: true },
    date:{type:Date,default:Date.now()}

});
let blogDATA = mongoose.model("myBlogData", blogschema);
module.exports = blogDATA;