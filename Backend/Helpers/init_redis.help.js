const redis = require('redis')

const client = redis.createClient({
  port: 6379,
  host: '127.0.0.1',
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