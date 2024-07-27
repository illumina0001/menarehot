const token = "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"
const username = '29cmb';

setInterval(() => {
    getStreak();
    getStars();
    getIssues();
    getCommits();
    getPrs();
}, 30 * 1000);

getStreak();
getStars();
getIssues();
getCommits();
getPrs();

function getStreak() {
    const today = new Date();
    let currentStreak = 0;
    let checking = true;

    function checkDay(date) {
        const dateString = date.toISOString().split('T')[0];
        return fetch(`https://api.github.com/search/commits?q=author:${username}+committer-date:${dateString}`, {
            headers: {
                "Authorization": `token ${token}`,
                'Accept': 'application/vnd.github.cloak-preview'
            }
        })
        .then(response => response.json())
        .then(data => data.total_count > 0);
    }

    function checkNextDay(date) {
        checkDay(date).then(hasContribution => {
            if (hasContribution && checking) {
                currentStreak++;
                const previousDay = new Date(date);
                previousDay.setDate(previousDay.getDate() - 1);
                checkNextDay(previousDay);
            } else {
                document.getElementById("StreakText").innerHTML = currentStreak.toString()
                console.log(`Current streak: ${currentStreak} days`);
                checking = false;
            }
        }).catch(error => {
            console.error('Error checking day:', error);
            checking = false;
        });
    }

    checkNextDay(today);
}

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