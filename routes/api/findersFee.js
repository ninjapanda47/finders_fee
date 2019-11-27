const mongoose = require("mongoose");
const Items = mongoose.model("Items");
const router = require('express').Router();

// Get all items
router.get("/getAll", async (req, res) => {
    const results = await Items.find({}).exec({})
    res.status(200).json(results)
});

// Get items by category
router.get("/searchbycategory/:category", async (req, res) => {
    const category = req.params.category
    const results = await Items.find({ itemCategory: category }).exec({})
    res.status(200).json(results)
});

// Get items by user
router.get("/searchbyuser/:userId", async (req, res) => {
    const userId = req.params.userId
    const results = await Items.find({ userId: userId }).exec({})
    res.status(200).json(results)
});


// Add new item
router.post("/addItem", async (req, res) => {
    const item = new Items(req.body);
    await item.save();
    res.status(200).json(item);
})

// Set item to found and input finderEmail
router.put("/updateItemFound", async (req, res) => {
    const updateItem = await Items.findByIdAndUpdate({
        _id: req.body.id
    }, {
        $set: { itemFound: true },
        $addToSet: { finderEmail: req.body.finderEmail }

    }, { new: true }, (err, doc) => {
        if (err) {
            console.log(err)
            return err
        }
        else {
            return doc
        }
    }
    );
    res.status(200).json(updateItem)
});

// Delete ietm
router.put("/api/deleteItem", async (req, res) => {
    console.log(req.body.id)
    const deleteItem = await Findersfee.findByIdAndRemove({
        _id: req.body.params.id
    }, (err, doc) => {
        if (err) {
            console.log(err);
            return err
        } else {
            return (doc);
        }
    });
    res.status(200).json(deleteItem)
});

module.exports = router;