let express = require("express");
let app = express();
let port = 3000;
let path = require("path");

// to built a middleware
let staticSite = path.join('app.js', '../public');

//to set the view engine
app.set("view engine", 'hbs');

// now mention the route of view engine to render the views file data
app.get("/", (req,res) => {
    res.render("index.hbs", {
        AboutUs: "our info",
    });
})
//app.use(express.static(staticSite));
app.get("/", (req,res) => {
    res.send("hello");

});

app.listen(port,"127.0.0.1", () => {
    console.log("listening to the port no 3000")
});