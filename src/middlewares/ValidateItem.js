function validateName(req, res, next) {
  const item = req.body;
  if (!item.name) {
    return res.status(400).json({
      error: 'Missing name'
    });
  }

  next();
}

module.exports = {
  validateName
};