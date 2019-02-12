
export const REQUEST = "REQUEST";
export const LOG_USER = "LOG_USER";
export const SELECT_VIDEO = "SELECT_VIDEO";
export const APPEND_RESULTS = "APPEND_RESULTS";
export const GEN_WATCHLIST = "GEN_WATCHLIST";
export const ADD_VIDEO = "ADD_VIDEO";
export const AUTH_REQUEST = "AUTH_REQUEST";
export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const ERROR = "ERROR";
export const DISTANCE = "DISTANCE";
export const TIME = "TIME";


export const request = () => ({
    type: REQUEST
});

export const selectVideo = (currentVideo, id, time) => ({
    type: SELECT_VIDEO,
    currentVideo,
    id,
});

export const genWatchlist = videos => ({
    type: GEN_WATCHLIST,
    videos
});

export const addToWatchlist = video => ({
    type: ADD_VIDEO,
    video
});

export const appendResults = videos => ({
    type: APPEND_RESULTS,
    videos
});

export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const fetchErr = err => ({
    type: ERROR,
    err
});

export const distance =
