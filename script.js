const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".tab-section");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove("active"));
    // Hide all main sections
    sections.forEach(s => s.classList.remove("active"));

    // Also hide any open project sections
    document.querySelectorAll(".project-detail").forEach(p => p.style.display = "none");

    // Activate clicked tab
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// Project functions
function openProject(id){
  document.getElementById("projects").style.display = "none";
  const project = document.getElementById(id);
  project.style.display = "block";
}

function closeProject(){
  document.querySelectorAll(".project-detail").forEach(section => {
    section.style.display = "none";
  });
  document.getElementById("projects").style.display = "block";
}
