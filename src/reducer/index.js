import * as actions from "../actions";

const initialState = {
    authToken: "",
    error: null,
    userID: "",
    videoUrl: "",
    watchlist: [],
    time: 0,
    distance: 0,
    title: "",
    thumbnail: "",
    avgTime:0,
    username: "",
    TrackedInformation: "",
    user: null,
    inputPage: [],
    loggedIn:false
};



export const reducer = (state = initialState, action) => {
    if (action.type === actions.ERROR) {
        return Object.assign({}, state, {
            error: action.err,
        });
    }

    if (action.typer === actions.INPUT_PAGE){
        return Object.assign({}, state, {
            inputPage: action.user
        })
    }

    if (action.type === actions.LOG_USER) {
        return Object.assign({}, state, {
            error: null,
            user: action.user,
            loggedIn: true
        });
    }

    if (action.type === action.TIMECALCULATOR){
        return Object.assign({}, state, {
            distance: action.distance,
            time: action.time,
            avgTime: action.avgTime,
            userID: action.user

        })
    }

    if (action.type === actions.SAVEDWORKOUTS) {
    return Object.assign({}, state, {
        videoUrl: action.videoUrl,
        thumbnail: action.thumbnail,
        title: action.title
    });

}
    if (action.type === actions.WATCHLIST) {
    return Object.assign({}, state, {
        watchlist: [],
        videoUrl: action.videoUrl,
        thumbnail: action.thumbnail,
        title: action.title
    });
}

    if (action.type === actions.SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken,
        });
    }

    if (action.type === actions.AUTH_SUCCESS) {
        return Object.assign({}, state, {
            user: action.currentUser.username,
            userID: action.currentUser.id
        });
    }
    return state;
}



