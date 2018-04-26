var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

const dbPath = '../db';


/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Api is live.');
});


const getDBPath = (table) => {
    return path.join(__dirname, dbPath, `${table}.json`);
}

/**
 * generate _ID
 */
const genID = (length = 25) => {
    let chars = 'mbvcxylkjhgfdsapoiuztrewq0123456789qwertzuiopasdfghjklyxcvbnm';
    let id = '';
    for (let i = 0; i < length; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}


/**
 *  GET all object fromt ha json file. 
 */
router.get('/:table', function (req, res, next) {
    fs.readFile(getDBPath(req.params.table), 'utf8', (err, jsonData) => {
        if (err) {
            return res.sendStatus(404);
        }
        res.send(jsonData);
    });

});

/**
 * GET specified object from the json file.
 */
router.get('/:table/:id', function (req, res, next) {
    fs.readFile(getDBPath(req.params.table), 'utf8', (err, jsonData) => {
        if (err) {
            return res.sendStatus(404);
        }
        //TODO: find entity by _id.
        let entity = JSON.parse(jsonData).find(obj => obj._id === req.params.id);
        res.send(entity);
    });
});

/**
 * CREATE object in a json array.
 */
router.post('/:table', function (req, res, next) {
    const filePath = getDBPath(req.params.table);
    fs.readFile(filePath, 'utf8', (err, jsonData) => {
        if (err) {
            return res.sendStatus(404);
        }
        jsonData = JSON.parse(jsonData);
        req.body._id = genID();
        jsonData.push(req.body);

        fs.writeFileSync(filePath, JSON.stringify(jsonData), 'utf8')
        res.json(req.body);
    });
});

/**
 * DELETE object by id from json array
 */
router.delete('/:table/:id', function (req, res, next) {
    const filePath = getDBPath(req.params.table);
    fs.readFile(getDBPath(req.params.table), 'utf8', (err, jsonData) => {
        if (err) {
            return res.sendStatus(404);
        }
        filteredData = JSON.parse(jsonData).filter(obj => obj._id != req.params.id);
        fs.writeFileSync(filePath, JSON.stringify(filteredData), 'utf8')
        res.json(`Entity deleted.`);
    });
});

/**
 * UPDATE object propreties by id
 */
router.put('/:table/:id', function (req, res, next) {
    const filePath = getDBPath(req.params.table);
    fs.readFile(getDBPath(req.params.table), 'utf8', (err, jsonData) => {
        if (err) {
            return res.sendStatus(404);
        }
        data = JSON.parse(jsonData);
        for (let i in data) {
            if (data[i]._id === req.params.id) {
                data[i].name = req.body.name || data[i].name;
                data[i].email = req.body.email || data[i].email;
                data[i].job = req.body.job || data[i].job;
                data[i].adress = req.body.adress || data[i].adress;
            }
        }
        fs.writeFileSync(filePath, JSON.stringify(data), 'utf8')
        res.send(`Entiti updated to ${data}`);
    });
});

module.exports = router;