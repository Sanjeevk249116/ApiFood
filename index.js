const jsonServer=require("json-server");
const server=jsonServer.create();
const router=jsonServer.router("db.json");
const miidleWare=jsonServer.defaults();
const port=process.env.PORT||8080;
server.use(miidleWare);
server.use(router);
server.listen(port);