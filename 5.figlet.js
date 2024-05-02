var figlet = require("figlet");

figlet("Booboo I UUUUU", function(err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});