const getInfo = (req, res) => {
  return res.json({
    status: "success",
    message: "Info route working correctly 🚀",
    data: {
      version: "v1",
      author: "Your Name",
      date: new Date(),
    },
  });
};

module.exports = {
  getInfo,
};