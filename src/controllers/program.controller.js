const Program = require('../models/Program'); // eslint-disable-line no-unused-vars

const add = (req, res) => {
  const {
    name, organization,
  } = req.body;
  const program = new Program({
    name, organization,
  });
  program.save()
    .then(() => {
      res.json({ success: true });
    }).catch((err) => {
      res.json({ success: false, error: err.message });
    });
};

module.exports = { add };
