
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    return next(); // User is an admin, proceed to the next middleware
  }
  res.status(403).send('Unauthorized'); 
};

const isUser = (req, res, next) => {
  if (req.user && req.user.role === 'user') {
    return next(); 
  }
  res.status(403).send('Unauthorized'); 
};

module.exports = { isAdmin, isUser };
