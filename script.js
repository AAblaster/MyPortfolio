const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".tab-section");

tabs.forEach(tab => {

tab.addEventListener("click", () => {

tabs.forEach(t => t.classList.remove("active"));
sections.forEach(s => s.classList.remove("active"));

tab.classList.add("active");

document
.getElementById(tab.dataset.tab)
.classList.add("active");

});

});

const projectTabs = document.querySelectorAll(".project-tab");
const projectSections = document.querySelectorAll(".project-section");

projectTabs.forEach(tab => {

tab.addEventListener("click", () => {

sections.forEach(s => s.style.display = "none");
projectSections.forEach(p => p.style.display = "none");

document
.getElementById(tab.dataset.project)
.style.display = "block";

});

});

document.querySelectorAll(".back").forEach(button => {

button.addEventListener("click", () => {

projectSections.forEach(p => p.style.display = "none");
document.getElementById("projects").style.display = "block";

});

});

function openProject(id){

document.getElementById("projects").style.display = "none";

const project = document.getElementById(id);
project.style.display = "block";

project.scrollIntoView({behavior:"smooth"});

}

function closeProject(){

document.querySelectorAll(".project-detail").forEach(section=>{
section.style.display = "none";
});

document.getElementById("projects").style.display = "block";

}
