import {GET_ALL_USERS, CREATE_USER, EDIT_USER, DELETE_USER} from "./constants";

// ------------- TRAE TODOS LOS USUARIOS
export function getAllUsers() {
    return function(dispatch) {
        return fetch(`http://localhost:3001/users`, {
            credentials: 'include'
        })
        .then((r) => r.json())
        .then((data) => {
            dispatch({ type: GET_ALL_USERS, payload: data})
        })
        .catch((error) => {
            console.error(error);
        });
    }
}

// ----------------- CREA UN USUARIO
export function createUser(user){
    const url = 'http://localhost:3001/users/';
    return function(dispatch)
    {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => {
            console.info(res)
            dispatch({type: CREATE_USER, payload: res})
        }).catch(err => console.error(err))
    }
}

// ------------------ EDITA UN USUARIO
export function editUser(user){
    console.info('productActions product:', user)
    return function(dispatch) {
        return fetch(`http://localhost:3001/users/${user.id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => {
            console.info(res)
            dispatch({type: EDIT_USER, payload: res})
        }).catch(err => console.error(err))
    }
}

// ------------------ BORRA UN USUARIO
export function deleteUser(UserId) {
    return function(dispatch) {
        return fetch(`http://localhost:3001/users/${UserId}`, {
        method: 'DELETE',
        body: JSON.stringify({ id : UserId }),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }).then(res => {
        console.info("FETCH DELETE USER")
        dispatch({type: DELETE_USER, payload: res})
        // alert("El Usuario se ha Eliminado correctamente")
        window.location = "/Admin/CrudUser";
    })
    .catch(err => console.error(err))
    }
}

export function promoteUser(userId){
    return function(dispatch){
        return fetch(`http://localhost:3001/users/auth/promote/${userId}`,{
            method: 'POST',
            body: "",
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            credentials: 'include'
        }).then(() => dispatch(getAllUsers()) )
    }
}
