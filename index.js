// 1 import json server
const jsonServer= require('json-server')

// 2 create a server application using json server
const mediaServer=jsonServer.create()


// 3 create a middleware used by json sever
const middleware=jsonServer.defaults()

// 4 set up route for db.json
const router = jsonServer.router('db.json')

// 5 applying middleware to the server
mediaServer.use(middleware)

//6 applying router to the server
mediaServer.use(router)

// 7. setting the port
const PORT =3000

// 8. Starting the server
mediaServer.listen(PORT,()=>{
    console.log('Media server started...listening on' +PORT);
    
})