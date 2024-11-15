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

app.get('/', logger, async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(something)
  } catch (error) {
    next(error);
    // res.status(400).json({
    //   success: false,
    //   message: "Failed to get data"
    // })
  }
})

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "Sucessfully received data"
  })
});

app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
      sucess: false,
      message: "Route is not found!"
    })
})

// global error handler 
app.use((error: any, req:Request, res:Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      sucess: false,
      message: "Somethig went wrong!"
    })
  }
})

export default app;