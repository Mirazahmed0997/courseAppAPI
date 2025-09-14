import express, { Application, Request, Response } from 'express' 
import { userRoutes } from './controllers/User.Controller';
import { courseRoutes } from './controllers/Course.controller';
const app : Application = express()

app.use(express.json());

const port=5000;

app.get('/', (req: Request , res: Response) => {
  res.send('Task App!')
})


app.use('/user', userRoutes)
app.use('/course', courseRoutes)

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

export default app
