const jsonServer=require('json-server')

const empServer=jsonServer.create()
const middileware=jsonServer.defaults()
const router=jsonServer.router("db.json")

const PORT=3000||process.env.PORT;

empServer.use(middileware)
empServer.use(router)

empServer.listen(PORT,()=>{
    console.log(`employee portal start at port: ${PORT}`);
})