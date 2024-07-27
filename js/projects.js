// AI Generated for prototyping
// Adjusted as needed

const projects = [
    { 
        name: "Kaboom Kompetition", 
        description: "Kaboom Kompetition is a roblox game where you use your rocket launcher and timebomb to destroy the map. You earn points through the destruction, and the person with the most points at the end of th round wins. You can purchase cosmetics and unlock achievements while you're playing. Check it out it you're bored or if you're craving destruction 😈", 
        image: "Images/IconV1.png",
        redirect: "https://www.roblox.com/games/13146174045/Kaboom-Kompetition"
    }, 
    {
        name: "Rhythm Game",
        description: "I made a rhythm game in LOVE2D, a lua-based game design framework, that includes a fully-featured level editor and level loading. Made for hackclub aracde 2024",
        image: "Images/LOVE2D.png",
        redirect: "https://github.com/29cmb/Love2dRhythmGame"
    },
    {
        name: "FFlag API",
        description: "I made a Fast Flag API that allows featurs to be asynchronously toggled without requiring servers to be put into maintenance or restarted. Very useful for developers.",
        image: "Images/Flag.png",
        redirect: "https://github.com/29cmb/FFlagAPI"
    },
    {
        name: "Platinum Minigames",
        description: "Platinum Minigames is a game where you play minigames in order to purchase cosmetics and other things. Play with friends or play solo! Complete the season pass or complete quests! The way you play is up to you.",
        image: "Images/Platinum.png",
        redirect: "https://www.roblox.com/games/6132510146/Platinum-Minigames"
    },
    {
        name: "Cleaner Menu",
        description: "Cleaner menu is a geometry dash mod which moves around the position of the menu buttons to be cleaner and less disorganized. UX design by UCrash, implementation by me. Not my best work, no, as I know basically nothing about c++.",
        image: "Images/CleanerMenu.png",
        redirect: "https://geode-sdk.org/mods/devcmb.cleanermenu"
    },
    {
        name: "Package Manager",
        description: "I made a package manager for roblox developers to find useful packages which are free to use and open source. It has a companion plugin which loads the actual packages, and a backend server written in nodejs. Made for hackclub arcade 2024",
        image: "Images/Github.png",
        redirect: "https://github.com/29cmb/PackageManagerPlugin"
    },
    {
        name: "Slimer",
        description: "A sprig game I made in around 4 hours to receive a sprig device grant. Made for hackclub arcade 2024 and hosted on their sprig website",
        image: "Images/Sprig.png",
        redirect: "https://sprig.hackclub.com/gallery/Slimer"
    },
    {
        name: "Arcade Discord Bot",
        description: "A discord bot to interact with the hackclub arcade API through discord instead of through heidi the hakkun on slack. Made for hackclub arcade 2024.",
        image: "Images/HackClubDiscordIcon.png",
        redirect: "https://github.com/29cmb/ArcadeDiscordBot"
    },
    {
        name: "Kaboom Webhook Server",
        description: "A discord webhook proxy, except it's not a webhook at all and it's a bot sending the messages. Everything is done through an API. Great for platforms that block direct access to discord",
        image: "Images/Discord.png",
        redirect: "https://github.com/Funi-Dog-Games/WebhookServer"
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