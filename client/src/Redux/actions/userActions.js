import {GET_ALL_USERS} from "./constants";


export function getAllUsers() {
    return function(dispatch) {
        return fetch(`http://localhost:3001/users`)
        .then((r) => r.json())
        .then((data) => {
            console.log('fetch Get all Users');
            dispatch({ type: GET_ALL_USERS, payload: data})
        })
        .catch((error) => {
            console.error(error);
        });
    }
}
