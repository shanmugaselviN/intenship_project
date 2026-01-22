
function addFertilizer() {
  const type = document.getElementById("type").value;
  const quantity = document.getElementById("quantity").value;

  fetch("http://localhost:3000/api/fertilizer/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, quantity })
  })
  .then(res => res.json())
  .then(() => alert("✅ Fertilizer Added"));
}