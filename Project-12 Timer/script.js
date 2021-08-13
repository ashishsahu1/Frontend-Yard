const newYears = '1 Jan 2022';

function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const sec = new Date(newYearDate - currentDate) / 1000;

    const days = Math.floor(sec / 3600 / 24);
    const hrs = Math.floor(sec/3600)%24;
    const mnutes = (Math)


    // console.log(newYearDate - currentDate);
    console.log(days,hrs)
}

countdown();

setInterval(countdown,1000);