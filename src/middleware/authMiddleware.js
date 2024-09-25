import jwt from 'jsonwebtoken';

const secret = process.env.MY_SECRET;

function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {  

        const ttoken = token.split(" ")[1];
        const decoded = jwt.verify(ttoken, secret);
        console.log("token")
      
        req.userId = decoded.userId;
        console.log(req.userId)
      
        next();
    } catch (error) {
        console.log("error de token")
        res.status(401).json({ error: 'Invalid token' });
    }
};

export default verifyToken;