const fetch = require("node-fetch");

exports.getOneUser = async (req, res) => {
  const user = await fetch(`${process.env.DB_URL}/users/${req.params.id}`).then((response) => response.json())
  .then((data) => console.log(data));

  res.status(200).json({
    success: true,
    user,
  });
};

//   tahk.tech@
