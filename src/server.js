"use strict";
exports.__esModule = true;
var fastify_1 = require("fastify");
var app = (0, fastify_1["default"])();
app.get("/hello", function () {
    return "Hello";
});
app
    .listen({
    port: 3333
})
    .then(function () {
    console.log("HTTP Server Running!");
});
