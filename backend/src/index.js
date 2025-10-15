const express = require("express");
const app = express();
const apiRoutes = require("./routes");
const { serverConfig } = require("./config/index");
const logger = require("./config/logger-config");

const PORT = serverConfig.PORT;

app.use(express.json());

// API routes
app.use("/api", apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack); // log the error
  res.status(500).json({ message: "Internal Server Error" });
});

// Start server
app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}`);
});
