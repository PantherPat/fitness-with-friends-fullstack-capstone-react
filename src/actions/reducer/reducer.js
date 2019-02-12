import * as actions from "../actions";

const initialState = {
    authToken: "",
    currentVideo: "",
    error: null,
    user: null,
    userID: "",
    videos: [],
    videoId: "",
    watchlist: [],
    time: 0,
    distance: 0,
    videoId: "",

};

export const reducer = (state = initialState, action) => {
    if (action.type === actions.ERROR) {
        return Object.assign({}, state, {
            error: action.err,
        });
    }
    if (action.type === actions.SELECT_VIDEO) {
        return Object.assign({}, state, {
            currentVideo: action.currentVideo,
            videoId: action.id,
        });
    }
    if(action.type === actions.DISTANCE){
        return Object.assign({}, state, {
        user
        })
    }

    if (action.type === actions.ADD_VIDEO) {
        return Object.assign({}, state, {
            videoId
        });
    }
    if (action.type === actions.GEN_WATCHLIST) {
        return Object.assign({}, state, {
            watchlist: action.videos
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
            loading: false
        });
    }

    if (action.type === actions.AUTH_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            user: action.currentUser.username,
            userID: action.currentUser.id
        });
    }
















}
