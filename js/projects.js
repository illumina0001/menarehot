// AI Generated for prototyping
// Adjusted as needed

const projects = [
    { 
        name: "Project", 
        description: "This is a brief description on the project that I am currently doing. What am I doing? uhh idk bro you tell me you're the man reading this, I'm just a text box.", 
        image: "https://via.placeholder.com/100" 
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
                <a href="#" class="check-it-out">
                    <img src="Images/CheckItOutButton.png" alt="Check it out">
                </a>
            </div>
            <img src="${project.image}" alt="${project.name}" class="project-image">
        `;
        container.appendChild(projectDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderProjects);