module.exports.env = () => {
  const r2 = require("dotenv").config({path: ".env"});

  console.log(r2.parsed);
  return r2.parsed;
};
