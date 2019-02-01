const checkCredits = (req, res, next) => {
  if (req.user.credits < 1) {
    return res
      .status(401)
      .send({ error: "Please add more credits to access this benefit" });
  }

  next();
};

module.exports = checkCredits;
