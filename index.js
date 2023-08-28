const http = require("http");
const fs = require("fs").promises;

const requestListener = function(req, res){
  console.log(req.url);
  if(req.url === "/"){
    fs.readFile(__dirname + "/recipes.html")
    .then(
      contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
      }
    )
  }
  else{
    fs.readFile(__dirname + "/recipes.json")
    .then(
      contents => {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(contents);
      }
    )
  }
}

const server = http.createServer(requestListener);

const host = "0.0.0.0";
const port = "8080";

server.listen(
  port,
  host,
  () => {
    console.log("Server is running");
  }
)