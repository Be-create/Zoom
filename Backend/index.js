import  express from 'express'
import  cors from 'cors'
import { Socket ,Server} from 'socket.io';
import http from "http"
const app = express();
const server = http.createServer(app)
app.use(cors());
const io = new Server(server,{cors:{
    origin:"*",
    methods:["GET","POST"]
}})
const PORT = process.env.PORT || 5000
app.get("/",(req,res)=>{
    res.send("Server Connected")
})
io.on("connection",(socket)=>{
    console.log(socket.id)
   socket.on('send-message',message=>{
    console.log(message)
   })
    socket.emit("me",socket.id);
    socket.on("disconnect",()=>{
        socket.broadcast.emit("Call Ended")
    });
    socket.on("callUser",({userToCall,signalData,from,name})=>{
        io.to(userToCall).emit({signalData,from,name})
    });
    socket.on("answerCall",(data)=>{
        io.to(data.to).emit("Call Accepted",data.signal)
    })
})
server.listen(PORT,()=>{
    console.log(`Server Listening on port ${PORT}`)
})
