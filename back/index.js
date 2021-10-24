const app = require("express")()
const PORT = 9999

app.get("/", (req, res, next) => {
    res.send("good response")
    
})

app.listen(
    PORT, 
    ()=>{console.log(`It's alive on http://localhost:${PORT}`)
})
