
function addWarehouse() {
  const product = document.getElementById("product").value;
  const stock = document.getElementById("stock").value;

  fetch("http://localhost:3000/api/warehouse/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ product, stock })
  })
  .then(res => res.json())
  .then(() => alert("✅ Warehouse Updated"));
}