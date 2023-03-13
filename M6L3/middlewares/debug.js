const logger = (req, res, next)=>{
    console.log("Request at " + req.url);
    next()
}
const methodLogger = (req, res, next)=>{
    console.log("Request with method " + req.method);
    next()
}

module.exports = {
    logger: logger,
    method: methodLogger
}