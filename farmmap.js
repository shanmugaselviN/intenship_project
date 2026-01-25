function addFarmMap() {
  const farmerName = document.getElementById("farmerName").value;
  const mapLocation = document.getElementById("mapLocation").value;
  const latitude = document.getElementById("latitude").value;
  const longitude = document.getElementById("longitude").value;
  const size = document.getElementById("size").value;

  fetch("http://localhost:3000/api/farmmap/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ farmerName, mapLocation, latitude, longitude, size })
  })
  .then(res => res.json())
  .then(() => alert("✅ Farm Map Added"));
}

function loadFarmMaps() {
  fetch("http://localhost:3000/api/farmmap/all")
    .then(res => res.json())
    .then(data => {
      const table = document.getElementById("farmmapTable");
      table.innerHTML = ""; 

      data.forEach(farm => {
        const row = table.insertRow();
        row.insertCell(0).innerText = farm.farmerName;
        row.insertCell(1).innerText = farm.mapLocation;
        row.insertCell(2).innerText = farm.latitude;
        row.insertCell(3).innerText = farm.longitude;
        row.insertCell(4).innerText = farm.size;
      });
    });
}