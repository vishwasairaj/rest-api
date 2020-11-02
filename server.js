let express = require('express');
let app = express();
let fs = require("fs");
app.get("/users", function (req, res) {
    // console.log(req.query)
    let query = req.query;
    let name = query.name;
    let id = query.id;
    let data = fs.readFileSync(__dirname + "/" + "db.json", "utf8");
    data = JSON.parse(data)
    // console.log(name, id)
    let users = data.users;
    // console.log(data.users)
    if (name) {
        console.log(users.length)
        let matchedData;
        for (let i = 0; i < users.length; i++) {
            console.log(name, users[i], i)
            if (name == users[i].name) {
                matchedData = users[i];
                break;
            }
        }
        if (matchedData) {
            return res.send(matchedData)
        } else {
            return res.send("no data found with name " + name);
        }
    } else if (id) {
        console.log(id);
        let matchedData;
        for (let i = 0; i < users.length; i++) {
            if (id == users[i].id) {
                matchedData = users[i];
                break;
            }
        }
        if (matchedData) {
            return res.send(matchedData)
        } else {
            return res.send("no data found with id " + id);
        }
    } else {
        return res.send(users)
    }
    // for (let i = 0; i < users.length; i++) {

        // console.log(users[i], i)
    }
    // res.send("vishwa")

);
app.get("/address", function (req, res) {
    let query = req.query;
    let name = query.name;
    let area = query.area;
    let data = fs.readFileSync(__dirname + "/" + "db.json", "utf8");
    // console.log(typeof data)
    data = JSON.parse(data)
    let address = data.address;

    console.log(address[0].name)
    if (name) {
        console.log(address.length)
        let matchedData;
        for(let i = 0; i < address.length; i++){
            console.log(name, address[i],i )
            if (name == address[i].name){
                matchedData = address[i];
                break;
            }
        }
        if (matchedData){ return res.send(matchedData)
        } else {
            return res.send("no data found with name " + name);
        }
    } else if (area) {
        console.log(area);
        let matchedData;
        for (let i = 0; i < address.length; i++) {
            if (area == address[i].area) {
                matchedData = address[i];
                break;
            }
        }
        if (matchedData) {
            return res.send(matchedData)
        } else {
            return res.send("no data found with area " + area);
        }
    } else {
        return res.send(address)
    }

        }  
);
let server = app.listen(3000, function () {
    let host = server.address().address
    let port = server.address().port
    console.log('im vishwa', host, port)
}) 