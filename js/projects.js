// AI Generated for prototyping
// Adjusted as needed

const projects = [
    { 
        name: "Project", 
        description: "This is a brief description on the project that I am currently doing. What am I doing? uhh idk bro you tell me you're the man reading this, I'm just a text box. Does this go off the screen? It might, idk man what do you want from me, I AM A TEXT BOX.", 
        image: "Images/Placeholder.png",
        redirect: "https://example.com"
    }
];

function renderProjects() {
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        
        projectDiv.innerHTML = `
            <div class="project-info">
                <h2>${project.name}</h2>
                <p>${project.description}</p>
                <a href="${project.redirect || "#"}" class="check-it-out">
                    <img src="Images/CheckItOutButton.png" alt="Check it out">
                </a>
            </div>
            <img src="${project.image}" alt="${project.name}" class="project-image">
        `;
        container.appendChild(projectDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderProjects);