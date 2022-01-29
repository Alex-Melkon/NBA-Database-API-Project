// API 1: player info "https://www.balldontlie.io/api/v1/players"

const playerInfo = document.querySelector(` .player`);

async function onSearchChange(event) {
    const player__name = event.target.value;
    getPlayers(player__name);
}


async function getPlayers (player__name) {
    const players = await fetch (`https://www.balldontlie.io/api/v1/players?search=${player__name}`) //fetching api
    const playersData = await players.json();
    console.log(playersData.data);
    playerInfo.innerHTML = playersData.data.map((player) => playerHTML(player)).join('');
}



function playerHTML(players) {
    return `
    <h1>NBA Player Info</h1>
    <div class="player-card" onclick="showUserPosts(${players.first_name && players.last_name})">
    <div class="player-card__container">
    <p><b>First Name: </b>${players.first_name}</p>
    <p><b>Last Name: </b>${players.last_name}</p>
    <p><b>Position: </b>${players.position} </p>
    <p><b>Feet: </b>${players.height_feet} </p>
    <p><b>Inches: </b>${players.height_inches}</p>
    <p><b>Team: </b>${players.team.abbreviation}</p>
    <p><b>City: </b>${players.team.city}</p>
    <p><b>Conference: </b>${players.team.conference}</p>
    <p><b>Division: </b>${players.team.division}</p>
    <p><b>Team Full Name: </b>${players.team.full_name}</p>
    <p><b>Team Name: </b>${players.team.name}</p>
</div>
</div>`
}





