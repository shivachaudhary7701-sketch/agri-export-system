 const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

let exportsData = [];

app.post("/add-export", (req, res) => {
    const data = req.body;
    exportsData.push(data);
    res.json({ message: "Export Added Successfully!" });
});

app.get("/exports", (req, res) => {
    res.json(exportsData);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});