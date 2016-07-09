var express = require("express"),
    router = express.Router(); //
    
var data = {
    data: [
        {id: 1, name: "work"}
    ]
};

router.get("/", function(req, res) {
    res.json(data);
});

router.get("/:projectId", function(req, res) {
    res.json(data.data[0]); // TODO
});

module.exports = router;