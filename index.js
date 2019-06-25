const express  = require('express');
const mongoose = require('mongoose');
const uri      = 'mongodb://localhost:27017/mern_stack_0106';

const app = express();

const { Docs } = require('./models/docs');

app.get('/', async (req, res) => {
    // Docs.find({})   
    //     .then(list => res.json(list))
    //     .catch(err => res.json({ err }));
    try {
        let listDocs = await Docs.find({});
        res.json({ listDocs });
    } catch (error) {
        res.json({ error })
    }
});

mongoose.connect(uri);
mongoose.connection.once('open', () => {
    console.log(`mongo client connected`)
    app.listen(3000, () => console.log(`server started at port 3000`));
});