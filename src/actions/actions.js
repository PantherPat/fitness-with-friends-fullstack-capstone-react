import { API_ORIGIN } from "../config";



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

export const request = () => ({
    type: REQUEST
});
export const timeCalulator = () => ({
    type: TIMECALCULATOR,
    distance,
    time,
    avgTime
})

export const logUser = user => ({
    type: LOG_USER,
    user
})

export const selectVideo = (id) => ({
    type: SELECT_VIDEO,
    id,
    thumbnail
});


export const addToWatchlist = video => ({
    type: ADD_VIDEO,
    watchlist
});

export const genWatchList = savedWorkouts => ({
    type: GEN_WATCHLIST,
    watchlist,
    thumbnail,
    videoUrl:
})


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

export const distance = () =>({
    type: DISTANCE,
    currentUser,
    id
})

export const time = () => ({
    type: TIME,
    currentUser,
    id
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

export const
