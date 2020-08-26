import { LOGIN, LOGOUT } from './constants';


// ----------------- LOGIN --------
export function sessionLogin(user){
    const url = 'http://localhost:3001/auth/login';
    return function(dispatch)
    {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.info(res)
            dispatch({type: LOGIN, payload: res})
        }).catch(err => console.error(err))
    }
}

// ----------------- LOGOUT --------
export function sessionLogout() {
    return function(dispatch) {
        return fetch(`http://localhost:3001/auth/logout`)
        .then((r) => r.json())
        .then((data) => {
            dispatch({ type: LOGOUT})
        })
        .catch((error) => {
            console.error(error);
        });
    }
}