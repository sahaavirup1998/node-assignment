var http = require("http");
const { normalize } = require("path");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    if (req.url === "/welcome") {
        res.statusCode = 200;
        res.setHeader("Content-Type","text/plain");
        res.end("Welcome to Dominos!");
    } else if (req.url === "/contact") {
        const obj = {
            phone: "18001253000", 
            email: "dominoswelcome@yopmail.com"
        };
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404).end("PAGE NOT FOUND")
    }
};

httpServer.listen(8081, () => {
    console.log("Listening");
});

module.exports = httpServer;