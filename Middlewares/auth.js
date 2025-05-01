const adminAuth = (req, res, next) => {
    const token = 'xyz';
    const adminToken = req?.body?.token || 'xyz1';
    const isAuthorized = token === adminToken;
    console.log('went through auth')
    if (!isAuthorized) {
        res.status(401).send('UnAuthorized!');
    } else {
        next();
    }
}

const userAuth = (req, res, next) => {
    const token = 'xyz';
    const adminToken = req?.body?.token || 'xyz';
    const isAuthorized = token === adminToken;
    console.log('went through auth')
    if (!isAuthorized) {
        res.status(401).send('UnAuthorized!');
    } else {
        next();
    }
}

module.exports = {
    adminAuth,
    userAuth
}