import express, { Request, Response } from "express"
const app = express()


// parsers 
app.use(express.json())
app.use(express.text())


app.get('/', (req: Request, res: Response) => {
  console.log(req.query)
  res.send('Hello Developer nw!')
})

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "Sucessfully received data"
  })
})

export default app;