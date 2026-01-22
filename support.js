
function sendSupport() {
  const issue = document.getElementById("issue").value;

  fetch("http://localhost:3000/api/support/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ issue })
  })
  .then(res => res.json())
  .then(() => alert("📩 Support Request Sent"));
}