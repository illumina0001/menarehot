const username = '29cmb';

getStars();
getIssues();
getCommits();
getPrs();

function getStars() {
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(data => {
        const totalStars = data.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        console.log(`Total stars: ${totalStars}`);
        document.getElementById("StarsText").innerHTML = totalStars.toString()
    })
    .catch(error => console.error('Error getting stars:', error));
}

function getIssues() {
    fetch(`https://api.github.com/search/issues?q=author:${username}+type:issue`)
    .then(response => response.json())
    .then(data => {
        console.log(`Total issues: ${data.total_count}`);
        document.getElementById("IssuesText").innerHTML = data.total_count.toString()
    })
    .catch(error => console.error('Error getting issues:', error));
}

function getCommits() {
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    const since = oneYearAgo.toISOString();
    
    fetch(`https://api.github.com/search/commits?q=author:${username}+committer-date:>${since}`, {
        headers: {
            'Accept': 'application/vnd.github.cloak-preview'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(`Commits in the last year: ${data.total_count}`);
        document.getElementById("CommitsText").innerHTML = data.total_count || "Rate Limited"
    })
    .catch(error => console.error('Error getting commits:', error));
}

function getPrs() {
    fetch(`https://api.github.com/search/issues?q=author:${username}+type:pr`)
    .then(response => response.json())
    .then(data => {
        console.log(`Total PRs: ${data.total_count}`);
        document.getElementById("PRText").innerHTML = data.total_count || "Rate Limited"
        
    })
    .catch(error => console.error('Error getting PRs:', error));
}