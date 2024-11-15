import express, { NextFunction, Request, Response } from "express"
const app = express()


// parsers 
app.use(express.json())
app.use(express.text())

//
const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/course", courseRouter);

userRouter.get('/create-user', (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "User is created Sucessfully",
    data: user,
  })
});


courseRouter.post('/create-course', (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "User is created Sucessfully",
    data: course,
  })
})

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
}

app.get('/',logger, (req: Request, res: Response) => {
  res.send('Hello Developer nw!')
})

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "Sucessfully received data"
  })
})

export default app;