const checkCredits = (req, res, next) => {
  if (req.user.credits < 1) {
    return res
      .status(403)
      .send({ error: "Please add more credits to access this." });
  }

  next();
};

module.exports = checkCredits;
