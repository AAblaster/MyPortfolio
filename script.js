const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".tab-section");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // 1. Reset Tabs
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // 2. Reset Main Sections
    sections.forEach(s => {
      s.classList.remove("active");
      // IMPORTANT: Reset the display style in case openProject hid it
      s.style.display = ""; 
    });

    // 3. Hide all Project Details
    document.querySelectorAll(".project-detail").forEach(p => {
      p.style.display = "none";
    });

    // 4. Show the section associated with the tab
    const activeSection = document.getElementById(tab.dataset.tab);
    activeSection.classList.add("active");
  });
});

// Project functions
function openProject(id) {
  // Hide the main grid
  document.getElementById("projects").style.display = "none";
  // Show the specific project
  const project = document.getElementById(id);
  if (project) {
    project.style.display = "block";
    // Ensure the page jumps to the top so they see the project
    window.scrollTo(0, 0);
  }
}

function closeProject() {
  document.querySelectorAll(".project-detail").forEach(p => p.style.display = "none");
  // Show the main projects grid again
  document.getElementById("projects").style.display = "block";
}
