// Base URL
const base_url = 'https://api.rawg.io/api'


// getting the date 
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10) {
        return `0${month}`
    } else {
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10) {
        return `0${day}`
    } else {
        return day
    }
}
const currentDay = getCurrentDay()
const currentMonth = getCurrentMonth()
const currentYear = new Date().getFullYear();

// popular games 

