const initState = {
    popular = [],
    newGames = [],
    upcomingGames = [],
}

const gameReducer = (state=initState, action) => {
switch(action.type) {
    case "FETCH_GAMES":
        return {...state}
        default:
            return {...state}
}
}

export default gameReducer