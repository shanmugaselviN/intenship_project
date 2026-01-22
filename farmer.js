
function addFarmer() {
  const name = document.getElementById("name").value;
  const land = document.getElementById("land").value;

  fetch("http://localhost:3000/api/farmer/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, land })
  })
  .then(res => res.json())
  .then(() => alert("✅ Farmer Added"));
}