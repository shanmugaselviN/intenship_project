
function addMachine() {
  const machine = document.getElementById("machine").value;
  const count = document.getElementById("count").value;

  fetch("http://localhost:3000/api/machinery/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ machine, count })
  })
  .then(res => res.json())
  .then(() => alert("✅ Machine Added"));
}