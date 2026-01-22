
function addLabour() {
  const name = document.getElementById("name").value;
  const work = document.getElementById("work").value;

  fetch("http://localhost:3000/api/labour/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, work })
  })
  .then(res => res.json())
  .then(() => alert("✅ Labour Added"));
}