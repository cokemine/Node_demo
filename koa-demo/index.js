"use strict";
const Koa = require('Koa');
const Router = require('koa-router');
const stc = require('koa-static');
const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const SERVER = "127.0.0.1";
const PORT = "3000";
const app = new Koa();
const router = new Router();

const debug = () => {
    return async (ctx, next) => {
        console.log(ctx.url);
        await next();
        console.log(ctx.response.status);
    };
}
app.use(bodyParser())
    .use(debug())
    .use(stc('./public'))
    .listen(PORT, async (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Server is listening on: " + PORT);
        }
    });

