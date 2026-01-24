const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const farmerRoutes = require("./routes/farmerRoutes");
const labourRoutes = require("./routes/labourRoutes");
const fertilizerRoutes = require("./routes/fertilizerRoutes");
const machineryRoutes = require("./routes/machineryRoutes");
const pestRoutes = require("./routes/pestRoutes");
const soilRoutes = require("./routes/soilRoutes");
const warehouseRoutes = require("./routes/warehouseRoutes");
const supportRoutes = require("./routes/supportRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/farmers", farmerRoutes);
app.use("/api/labour", labourRoutes);
app.use("/api/fertilizer", fertilizerRoutes);
app.use("/api/machinery", machineryRoutes);
app.use("/api/pest", pestRoutes);
app.use("/api/soil", soilRoutes);
app.use("/api/warehouse", warehouseRoutes);
app.use("/api/support", supportRoutes);

app.get("/", (req, res) => {
  res.send("🌾 Smart Farm Backend Running Successfully");
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});d