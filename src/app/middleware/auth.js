const jwt = require('jsonwebtoken');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const authHeaders = req.headers.authorization;

  if (!authHeaders) return res.status(401).send({ error: 'No token provided' });

  const parts = authHeaders.split(' ');

  if (!parts.length === 2) return res.status(401).send({ error: 'Token error' });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) return res.status(401).send({ error: 'Token malformated' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send({ error: 'Token invalid' });
    req.userId = decoded.params.id;

    return next();
  });
};
