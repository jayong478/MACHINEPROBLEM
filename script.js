function showInfo(id) {
    document.getElementById("main-content").style.display = "none";
    document.querySelectorAll(".info-panel").forEach(panel => {
      panel.style.display = "none";
    });
    document.getElementById(id).style.display = "block";
  }
  
  function closeInfo() {
    document.querySelectorAll(".info-panel").forEach(panel => {
      panel.style.display = "none";
    });
    document.getElementById("main-content").style.display = "block";
  }
  