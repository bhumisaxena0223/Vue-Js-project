const http = require('http');

const app = require('./app');

const port =  process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
const mongoose = require('mongoose');

const Dishes = require('./api/models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {

    console.log('Connected correctly to server');

    var newDish = Dishes({
        Material: 'Uthappizza',
		price: 'test',
		date: '20181114'
    });

    newDish.save()
        .then((dish) => {
            console.log(dish);

            return Dishes.find({});
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });
});