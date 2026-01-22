

document.addEventListener("DOMContentLoaded", () => {
  console.log("🌿 Smart Farm UI Loaded");

  backendCheck();
  buttonEffect();
});


function backendCheck() {
  fetch("/status")
    .then(res => res.json())
    .then(data => {
      console.log("✅ Backend:", data.message);
    })
    .catch(() => {
      console.log("❌ Backend not running");
    });
}


function buttonEffect() {
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "translateY(-6px) scale(1.05)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translateY(0) scale(1)";
    });
  });
}