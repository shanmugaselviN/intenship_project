const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./authRoutes");
const farmerRoutes = require("./farmerRoutes");
const farmmapRoutes = require("./farmmapRoutes");
const labourRoutes = require("./labourRoutes");
const fertilizerRoutes = require("./fertilizerRoutes");
const machineryRoutes = require("./machineryRoutes");
const pestRoutes = require("./pestRoutes");
const soilRoutes = require("./soilRoutes");
const warehouseRoutes = require("./warehouseRoutes");
const supportRoutes = require("./supportRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.use("/api/auth", authRoutes);
app.use("/api/farmers", farmerRoutes);
app.use("/api/farmmap", farmmapRoutes);
app.use("/api/labour", labourRoutes);
app.use("/api/fertilizer", fertilizerRoutes);
app.use("/api/machinery", machineryRoutes);
app.use("/api/pest", pestRoutes);
app.use("/api/soil", soilRoutes);
app.use("/api/warehouse", warehouseRoutes);
app.use("/api/support", supportRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});