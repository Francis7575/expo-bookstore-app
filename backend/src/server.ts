import app from "./app";
import { connectDB } from "./lib/db";

const PORT = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT} & Connected To MongoDB`);
    });
  })
  .catch((error) => {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  });
