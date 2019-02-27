import API_ORIGIN  from "../config";
import jwtDecode from "jwt-decode";



export const REQUEST = "REQUEST";
export const LOG_USER = "LOG_USER";
export const SELECT_VIDEO = "SELECT_VIDEO";
export const GEN_WATCHLIST = "GEN_WATCHLIST";
export const ADD_VIDEO = "ADD_VIDEO";
export const AUTH_REQUEST = "AUTH_REQUEST";
export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const ERROR = "ERROR";
export const DISTANCE = "DISTANCE";
export const TIME = "TIME";
export const AVGTIME = "AVGTIME"
export const TIMECALCULATOR = "TIMECALCULATOR"
export const THUMBNAIL = "THUMBNAIL"
export const WATCHLIST ="WATCHLIST"
export const VIDEOURL ="VIDEOURL"
export const CURRENTUSER ="CURRENTUSER"
export const USERID ="USERID"
export const USERNAME ="USERNAME"

export const request = () => ({
    type: REQUEST
});


export const timeCalulator = () => ({
    type: TIMECALCULATOR,
    DISTANCE,
    TIME,
    AVGTIME
})

export const logUser = user => ({
    type: LOG_USER,
    USERNAME
})

export const selectVideo = (id) => ({
    type: SELECT_VIDEO,
    USERID,
    THUMBNAIL
});


export const addToWatchlist = video => ({
    type: ADD_VIDEO,
    WATCHLIST
});

export const genWatchList = savedWorkouts => ({
    type: GEN_WATCHLIST,
    WATCHLIST,
    THUMBNAIL,
    VIDEOURL
})


export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    SET_AUTH_TOKEN
});

export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    CURRENTUSER
});

export const fetchErr = err => ({
    type: ERROR,
    ERROR
});

export const distance = () =>({
    type: DISTANCE,
    CURRENTUSER,
    USERID
})

export const time = () => ({
    type: TIME,
    CURRENTUSER,
    USERID
})



export const login = user => dispatch => {
    dispatch(request());
    fetch(`${API_ORIGIN}/users/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
        .then(authToken => storeAuthInfo(authToken.token, dispatch))
        .catch(err => {
        dispatch(fetchErr(err));
    });
};

const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken));
    dispatch(logSession({ user: decodedToken.username }));
};

export const logSession = user => dispatch => {
    fetch(`${API_ORIGIN}/users/login`, {
        method: "POST",
        mode: "cors",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
        .then(res => {
        dispatch(res.loggedIn);
    });
};


export const signupUser = user => dispatch => {
    dispatch(request());
    fetch(`${API_ORIGIN}/users/create`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
        .then(authToken => storeAuthInfo(authToken.token, dispatch))
        .catch(err => {
        dispatch(fetchErr(err));
    });
};
