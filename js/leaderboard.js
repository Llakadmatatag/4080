// Leaderboard Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Sample leaderboard data (in a real app, this would come from an API)
    const leaderboardData = generateRandomData('allTime');
    
    // DOM Elements
    const leaderboardEntries = document.getElementById('leaderboard-entries');
    
    // Initialize the leaderboard
    updateLeaderboard();
    
    // Function to update the leaderboard
    function updateLeaderboard() {
        // Clear current entries
        leaderboardEntries.innerHTML = '';
        
        // Add entries to the leaderboard
        leaderboardData.forEach((entry, index) => {
            const entryElement = document.createElement('div');
            entryElement.className = 'leaderboard-entry';
            entryElement.innerHTML = `
                <div class="rank">${index + 1}</div>
                <div class="player">
                    <div class="player-avatar">${entry.name.charAt(0).toUpperCase()}</div>
                    <span class="player-name">${entry.name}</span>
                </div>
                <div class="score">${entry.score.toLocaleString()}</div>
                <div class="level">${entry.level}</div>
            `;
            
            leaderboardEntries.appendChild(entryElement);
        });
        
        // Add animation to entries
        animateLeaderboard();
    }
    
    // Function to generate random leaderboard data
    function generateRandomData() {
        const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Emma', 'James', 'Olivia', 'Robert', 'Sophia'];
        const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson'];
        const data = [];
        
        for (let i = 0; i < 50; i++) {
            const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
            const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
            const name = `${firstName} ${lastName}`;
            const score = Math.floor(Math.random() * 50000) + 10000;
            const level = Math.floor(score / 1000) + 1;
            
            data.push({
                name,
                score: score,
                level,
                avatar: `https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=random`
            });
        }
        
        // Sort by score in descending order
        return data.sort((a, b) => b.score - a.score);
    }
    
    // Function to animate leaderboard entries
    function animateLeaderboard() {
        const entries = document.querySelectorAll('.leaderboard-entry');
        
        entries.forEach((entry, index) => {
            // Set initial state
            entry.style.opacity = '0';
            entry.style.transform = 'translateX(-20px)';
            entry.style.transition = `all 0.3s ease ${index * 0.05}s`;
            
            // Trigger animation
            setTimeout(() => {
                entry.style.opacity = '1';
                entry.style.transform = 'translateX(0)';
            }, 50);
        });
    }
    
    // Add hover effect to leaderboard entries
    leaderboardEntries.addEventListener('mouseover', function(e) {
        const entry = e.target.closest('.leaderboard-entry');
        if (entry) {
            entry.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
        }
    });
    
    leaderboardEntries.addEventListener('mouseout', function(e) {
        const entry = e.target.closest('.leaderboard-entry');
        if (entry) {
            entry.style.backgroundColor = '';
        }
    });
    
    // Initial animation
    animateLeaderboard();
});
