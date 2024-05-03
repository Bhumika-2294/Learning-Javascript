const express = require('express')
const app = express();

app.use(function(req, res, next) {
    console.log("Middleware is working");
    next();

})
app.use(function(req, res, next) {
    console.log("Middleware 2 is performing");
    next();
})
app.get("/", function(req, res) {
    res.send("hello from base url");

});
app.get("/profile", function(req, res) {
    res.send("hello from profile");

})
app.listen(3000, () => {
    console.log("server started at port 3000", )

});