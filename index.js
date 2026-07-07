const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Express Dashboard</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial, Helvetica, sans-serif;
}

body{
background:#0f172a;
color:white;
}

nav{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 60px;
background:#1e293b;
}

.logo{
font-size:28px;
font-weight:bold;
color:#38bdf8;
}

.menu a{
text-decoration:none;
color:white;
margin-left:20px;
}

.hero{
text-align:center;
padding:70px 20px;
}

.hero h1{
font-size:45px;
margin-bottom:20px;
}

.hero p{
color:#cbd5e1;
font-size:18px;
}

.container{
width:90%;
margin:40px auto;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
}

.card{
background:#1e293b;
padding:25px;
border-radius:12px;
text-align:center;
transition:.3s;
}

.card:hover{
transform:translateY(-8px);
}

.card h2{
margin-bottom:15px;
color:#38bdf8;
}

button{
margin-top:25px;
padding:12px 30px;
font-size:16px;
border:none;
border-radius:8px;
background:#38bdf8;
color:white;
cursor:pointer;
}

button:hover{
background:#0ea5e9;
}

#result{
margin-top:20px;
font-size:20px;
color:#22c55e;
}

footer{
margin-top:50px;
padding:20px;
background:#1e293b;
text-align:center;
}

</style>

</head>

<body>

<nav>

<div class="logo">
Express JS
</div>

<div class="menu">
<a href="/">Home</a>
<a href="/api">API</a>
</div>

</nav>

<section class="hero">

<h1>🚀 Express.js Dashboard</h1>

<p>Simple Backend Project using Express.js</p>

<button onclick="loadAPI()">
Check API
</button>

<div id="result"></div>

</section>

<div class="container">

<div class="card">
<h2>⚡ Fast</h2>
<p>Express is lightweight and super fast.</p>
</div>

<div class="card">
<h2>📦 Easy Routing</h2>
<p>Create APIs with simple syntax.</p>
</div>

<div class="card">
<h2>🌐 REST API</h2>
<p>Perfect for backend development.</p>
</div>

</div>

<footer>

Current Time :
<span id="time"></span>

</footer>

<script>

setInterval(()=>{
document.getElementById("time").innerHTML=new Date().toLocaleTimeString();
},1000);

async function loadAPI(){

const response=await fetch("/api");
const data=await response.json();

document.getElementById("result").innerHTML=data.message;

}

</script>

</body>
</html>
`);
});

// API Route
app.get("/api", (req, res) => {

res.json({

status:"✅ Server Running",
message:"Express API Connected Successfully",
framework:"Express.js",
port:PORT

});

});

// About Route
app.get("/about",(req,res)=>{

res.send("<h1>About Page</h1><p>This page is served using Express.js</p>");

});

// Contact Route
app.get("/contact",(req,res)=>{

res.send("<h1>Contact Page</h1><p>Email : demo@example.com</p>");

});

// Start Server
app.listen(PORT,()=>{

console.log("🚀 Server Running");
console.log("http://localhost:"+PORT);

});