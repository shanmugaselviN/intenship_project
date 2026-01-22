
function addPest() {
  const pest = document.getElementById("pest").value;
  const solution = document.getElementById("solution").value;

  fetch("http://localhost:3000/api/pest/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pest, solution })
  })
  .then(res => res.json())
  .then(() => alert("✅ Pest Data Saved"));
}