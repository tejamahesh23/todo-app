const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://todo:oEf3m4DuIqw3D2NI@cluster0.bdwqk.mongodb.net/todo-app',{
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('debug', true);
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");