const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

// Custom log format
const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

const logger = createLogger({
  level: "info", // default log level
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    customFormat
  ),
  transports: [
    // Log to console
    new transports.Console(),

    // Log errors to error.log
    new transports.File({ filename: "error.log", level: "error" }),

    // Log all messages to combined.log
    new transports.File({ filename: "combined.log" }),
  ],
});

module.exports = logger;
