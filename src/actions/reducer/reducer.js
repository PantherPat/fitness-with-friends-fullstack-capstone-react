import * as actions from "../actions";

const initialState = {
    authToken: "",
    currentVideo: "",
    error: null,
    user: null,
    userID: "",
    videoUrl: "",
    watchlist: [],
    time: 0,
    distance: 0,
    title: "",
    thumbnail: ""

};

export const reducer = (state = initialState, action) => {
    if (action.type === actions.ERROR) {
        return Object.assign({}, state, {
            error: action.err,
        });
    }

    if (action.type === actions.LOG_USER) {
        return Object.assign({}, state, {
            error: null,
            user: action.user
        });
    }

    }
    if(action.type === actions.DISTANCE){
        return Object.assign({}, state, {
        user
        })
    }

    if (action.type === actions.ADD_VIDEO) {
        return Object.assign({}, state, {
            videoUrl,
            thumbnail,
            title
        });
    }
    if (action.type === actions.GEN_WATCHLIST) {
        return Object.assign({}, state, {
            watchlist: [],
            videoUrl,
            userId
        });
    }
    if (action.type === actions.LOG_USER) {
        return Object.assign({}, state, {
            error: null,
            user: action.user
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
