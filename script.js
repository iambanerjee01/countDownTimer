const daysLeft = document.getElementById('days');
const hoursLeft = document.getElementById('hours')
const minsLeft = document.getElementById('mins');
const secondsLeft = document.getElementById('seconds');

const independence = '15 August 2021';

function countdwon() {
    const independenceDate = new Date(independence);
    const currentDate = new Date();
    
// Logic to get remaining Days, hours, minutes and seconds

    const totalSeconds = (independenceDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    daysLeft.innerHTML = days;
    hoursLeft.innerHTML = hours;
    minsLeft.innerHTML = formatTime(minutes);
    secondsLeft.innerHTML = formatTime(seconds);

}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
countdwon();
    setInterval(countdwon, 1000);
