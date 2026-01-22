
function addSoilTest() {
  const ph = document.getElementById("ph").value;
  const moisture = document.getElementById("moisture").value;

  fetch("http://localhost:3000/api/soil/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ph, moisture })
  })
  .then(res => res.json())
  .then(() => alert("✅ Soil Test Saved"));
}