document.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://api.spacexdata.com/v4/launches/upcoming')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.length = 4; 
        addLaunches(data)
    });

    const getLaunchHTML = ({ date_utc, name, details, links }) => {
        const formattedDate = date_utc.split('T')[0];
        const patch = links.patch.small;
        
        return `<div class='launchbox'>
            <dt>IMAGE:</dt> <dd><img src="../img/rocketlaunch.svg"></dd>
            <dt>DATE:</dt> <dd>${formattedDate}</dd>
            <dt>WEHICLE:</dt> <dd>${name}</dd>
            <dt>MISSION:</dt> <dd>${details ?? 'No details yet'}</dd>
        </div>`
    };

    const addLaunches = (data) => {
        const wrapper = document.querySelector('.launchWrapper');
        
        data.forEach(launch => {
            const launchHTML = document.createElement('dl');
            launchHTML.innerHTML = getLaunchHTML(launch);

            wrapper.append(launchHTML);
        });
    };


});