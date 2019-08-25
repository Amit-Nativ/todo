const logRequest = (req, res, next) => {
    console.log(`url: ${req.method} ${req.url}, time: ${Date.now().toString()}`);
    next();
};

module.exports = {logRequest};