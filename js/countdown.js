const startCountdown = (data) => {
    const endDate = new Date(data.date_local);

    const countDown = setInterval(() => {
        const now = new Date().getTime();
    
        const distance = endDate - now;
        
        if (distance < 0) {
        clearInterval(countDown);
        document.querySelector(".countDown").innerHTML = "Launched";
        return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
 
        document.querySelector("#days span").innerHTML = days;
        document.querySelector("#hours span").innerHTML = hours;
        document.querySelector("#minutes span").innerHTML = minutes;
        document.querySelector("#seconds span").innerHTML = seconds;
    }, 1000);

};

document.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://api.spacexdata.com/v4/launches/next')
    .then(response => response.json())
    .then(data => {
        startCountdown(data)
    });
});
