const redis = require('redis')
require("dotenv").config()

const client = redis.createClient({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOSTNAME,
  password: process.env.REDIS_PASS
})

client.on('connect', async () => {
  console.log('Client connected to redis...')
  
})

client.on('ready', () => {
  console.log('Client connected to redis and ready to use...')
})



client.on('error', (err) => {
  console.log(err.message)
})

client.on('end', () => {
  console.log('Client disconnected from redis')
})

// if (process.platform === "win32") {
//   var rl = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   rl.on("SIGINT", function () {
//     process.emit("SIGINT");
//   });
// }

process.on('exit', () => {
  client.quit()
})



module.exports = client