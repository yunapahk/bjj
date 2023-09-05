////////////////////////
// Setup - Import deps
////////////////////////
const Move = require('../models/move');
const moveSeed = require('../models/seed')
///////////////////////
// Exports
///////////////////////

module.exports = {
    create,
    new: newMove,
    show,
    index,
    edit,
    update,
    delete: deleteMove,
    seed,
    like
};

///////////////////////
// Declare Routes 
///////////////////////
// Index
///////////////////////
async function index(req, res) {
    try {
        let entryDocuments = await Move.find({});
        res.render('index.ejs', {
            moves: moveDocuments,
            currentUser: req.session.username 
            }
        );
    } catch(err) {
        res.send(err);
    }
};

///////////////////////
// New
///////////////////////
function newMove(req, res) {
    res.render('new.ejs');
};

///////////////////////
// Show
///////////////////////
async function show(req, res) {
    try {
        let foundMove = await Move.findById(req.params.id);
        res.render('show.ejs', {
            entry: foundMove
        });
    } catch(err) {
        res.send(err);
    }
};

///////////////////////
// Edit
///////////////////////
async function edit(req, res) {
    try {
        let entry = await Move.findById(req.params.id);
        res.render('edit.ejs', {move});
    } catch(err) {
        res.send(err);
    }
};

///////////////////////
// Update
///////////////////////
async function update(req, res) {
    try {
        await Move.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/move/${req.params.id}`);
    } catch(err) {
        res.send(err);
    }
};

///////////////////////
// Create
///////////////////////
async function create(req, res) {
    try {
        req.body.username = req.session.username
        let freshMove = await Move.create(req.body);
        freshEntry.meta = {
            votes: 0,
            favs: 0,
        };
        freshMove.save()
        res.redirect(`/move`)
    } catch(err) {
        res.send(err);
    }
};

///////////////////////
// Delete
///////////////////////
async function deleteMove(req, res) {
    try {
        await Entry.findByIdAndDelete(req.params.id);
        res.redirect('/move')
    } catch(err) {
        res.send(err)
    }
}

///////////////////////
// Seed
///////////////////////
async function seed(req, res) {
    try {
        await Move.deleteMany({});
        await Move.create(moveSeed);
        res.redirect('/move')
    } catch(err) {
        res.send(err)
    }
}

///////////////////////
// todo single use functionality of like button
// Like
///////////////////////
async function like(req, res) {
    try {
        let foundEntry = await Move.findById(req.params.id);
        foundMove.meta.favs += 1
        foundMove.save()
        res.redirect(`/move`)
    } catch(err) {
        res.send(err)
    }
}