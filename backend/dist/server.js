"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = require("./lib/db");
const PORT = process.env.PORT;
(0, db_1.connectDB)()
    .then(() => {
    app_1.default.listen(PORT, () => {
        console.log(`✅ Server is running on port ${PORT} & Connected To MongoDB`);
    });
})
    .catch((error) => {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
});
