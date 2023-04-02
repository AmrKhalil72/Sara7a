import express from 'express';
import { dbConnection } from "./database/db.Connection.js";
import router from './src/modules/users/user.router.js';
import messageRouter from './src/modules/messages/message.router.js';

const app = express();
app.listen(3000,()=>{
  console.log('server is running');
});
app.get('/',(req,res)=>{
  res.send('hello world');
});

app.use(express.json())
app.use('/users',router)
app.use('/messages',messageRouter)
dbConnection();