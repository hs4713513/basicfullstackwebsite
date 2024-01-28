import express from "express" //it is module js it is asynchronous

const app=express()

// app.get('/',(req,res)=>{
//     res.send("Server is ready")
// })

//get a list of 5 jokes..

app.get('/api/jokes',(req,res)=>{
    const jokes=[{
        id: 1,
        title: "Chicken Crossed the Road",
        content: "Why did the chicken cross the road? To get to the other side!"
      },
      {
        id: 2,
        title: "Dad Joke",
        content: "Why don't scientists trust atoms? Because they make up everything!"
      },
      {
        id: 3,
        title: "Knock Knock",
        content: "Knock, knock. Who’s there? Lettuce. Lettuce who? Lettuce in, it’s freezing out here!"
      },
    ]
    res.send(jokes)
})

const port=process.env.PORT||3000;

app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`)
});

