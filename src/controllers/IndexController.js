function index(req, res) {
  res.status(200).send({
    message: 'API Index'
  });
}

module.exports = {
  index
}