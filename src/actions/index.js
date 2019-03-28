import {API_ORIGIN}  from "../config";
import jwtDecode from "jwt-decode";



export const REQUEST = "REQUEST";
export const LOG_USER = "LOG_USER";
export const WATCHLIST = "WATCHLIST";
export const ADD_VIDEO = "ADD_VIDEO";
export const ERROR = "ERROR";
export const TIMECALCULATOR = "TIMECALCULATOR";
export const SEARCHVIDEOS = "SEARCHVIDEOS";
export const SAVEDWORKOUTS = "SAVEDWORKOUTS";
export const AUTH_REQUEST = "AUTH_REQUEST";
export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
export const AUTH_SUCCESS = "AUTH_SUCCESS";



export const timeCalculator = (time,distance,avgTime, userID) => ({
    type: TIMECALCULATOR,
    userID,
    time,
    distance,
    avgTime,
});

export const request = () => ({
    type: REQUEST
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


export const logUser = user => ({
    type: LOG_USER,
    user
})

export const watchList = (watchlist,thumbnail,videoUrl) => ({
    type: WATCHLIST,
    watchlist,
    thumbnail,
    videoUrl
})

export const savedWorkouts = (videoUrl) => ({
    type: SAVEDWORKOUTS,
    videoUrl
})

export const fetchErr = err => ({
    type: ERROR,
});


const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken));
    dispatch(logSession({ user: decodedToken.username }));
};


export const login = user => dispatch => {
    dispatch(request());
    fetch(`/auth/login`, {
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

export const logSession = user => dispatch => {
    fetch(`/auth/userLoggedIn`, {
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
        this.props.dispatch(res.loggedIn);
    });
};

export const signupUser = user => dispatch => {
    dispatch(request());
    console.log(user);
    fetch(`/auth/signup`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => {
        console.log(res);
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

export const tCalculator = (timeCalculator)  => {
    console.log(timeCalculator)


    fetch(`/time-calculator`, {
    method: "POST",
    headers: {
        "content-type": "application/json",
        Authorization: `Bearer HELLO`
    },
    body: JSON.stringify(timeCalculator)
})
    .then(res => {
    if (!res.ok) {
        return Promise.reject(res.statusText);
    }
    return res.json();
})
    .then(res => {
    console.log(res);
//        dispatch(trackedInformation(res));
})
    .catch(err => {
    console.log(err);
});
};

// getWatchlist gets saved videos
export const getWatchlist = (userId, token) => dispatch => {
    dispatch(request());
    fetch(`/show-saved-workouts/${userId}`, {
        mode: "cors",
        headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
        .then(res => {
        dispatch(res.videos);
    })
        .catch(err => {
        dispatch(fetchErr(err));
    });
};

export const addVideo = (video,userID, token) => dispatch => {
    // Extracts properties for database
    const videoObj = {
        url: video.id.videoUrl,
        title: video.snippet.title,
        thumbnail: video.snippet.thumbnails.medium.url
    };

    const userVideo = { video: videoObj, id: userID };

    dispatch(request());
    fetch(`/saved-workouts`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(userVideo)
    })
        .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
        .then(res => {
        console.log(res);
        dispatch(addVideo(res));
    })
        .catch(err => {
        console.log(err);
    });
};
