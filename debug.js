function setIntervalFor(handler, intervalMs, timeoutMs){
let i = setInterval(handler, intervalMs)
setTimeout(()=>clearInterval(i), timeoutMs)
}