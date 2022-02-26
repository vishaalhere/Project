const fetch = require("node-fetch");

exports.getOneUser = async (req, res) => {
  const response = await fetch(`${process.env.DB_URL}/users/${req.params.id}`);
  const user =  await response.json();

  res.status(200).json({
    success: true,
    data: user,
  });
};

//   tahk.tech@
