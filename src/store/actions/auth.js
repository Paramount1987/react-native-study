import {TRY_AUTH, AUTH_SET_TOKEN}   from './actionTypes';
import { uiStopLoading, uiStartLoading } from './index';
import startMainTabs from "../../screens/MainTabs/startMainTabs";

export const tryAuth = (authData, authMode) => {
    return dispatch => {
        dispatch(uiStartLoading());
        const apiKey = 'AIzaSyDXLAHpdN2gRyhOA-an15GzDJbX5ZLoQIM';
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + apiKey;

        if (authMode === 'signup') {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + apiKey;
        }

        fetch(
            url,
            {
                method: 'POST',
                body: JSON.stringify({
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(parsedRes => {
                dispatch(uiStopLoading());
                console.log(parsedRes);
                if (!parsedRes.idToken) {
                    alert('Authentication failed, please try again!');
                } else {
                    dispatch(authSetToken(parsedRes.idToken));
                    startMainTabs();
                }
            })
            .catch(err => {
                console.log(err);
                alert('Authentication failed, please try again!');
                dispatch(uiStopLoading());
            });
    }
};

export const authSetToken = token => {
    return {
        type: AUTH_SET_TOKEN,
        payload: {
            token: token
        }
    }
}