/**
 * Created by Anne on 2/28/2016.
 */

var irc = require("tmi.js");

var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "chat",
        reconnect: true
    },
    identity: {
        username: "name",
        password: "oauth:"
    },
    channels: ["#channelname"]
};

var client = new irc.client(options);

// Connect the client to the server..
client.connect();




