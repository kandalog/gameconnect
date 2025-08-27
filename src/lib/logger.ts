import winston from "winston";

const isProduction = process.env.NODE_ENV === "production";
const logger = winston.createLogger({
  level: isProduction ? "info" : "debug",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
  ),
  transports: [
    // 本番環境用
    ...(isProduction
      ? [
          new winston.transports.Console({
            format: winston.format.json(),
          }),
          // 利用者が増えたらslackにも通知を飛ばす
        ]
      : []),
    // 開発環境用
    ...(!isProduction
      ? [
          new winston.transports.Console({
            format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
          }),
        ]
      : []),
  ],
});

export default logger;
