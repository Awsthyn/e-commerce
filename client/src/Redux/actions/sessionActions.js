import { LOGIN, LOGOUT } from './constants';
import swal from 'sweetalert';



// ----------------- LOGIN --------
export function sessionLogin(data){
    const url = 'http://localhost:3001/auth/login';
    console.log('mando', data)
    return function(dispatch)
    {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include' 
        })
        .then(res => res.json())
        .then(res => {
            console.info("recibo", res)
            dispatch({type: LOGIN, payload: res})
        }).catch(err => console.error(err))
    }
}

// ----------------- LOGOUT --------
export function sessionLogout() {
    console.log('accion despachada')
    return function(dispatch) {
        return fetch(`http://localhost:3001/auth/logout`, {
            credentials: 'include'
        })
        .then((r) => r.json())
        .then((data) => {
            dispatch({ type: LOGOUT})
        })
        .catch((error) => {
            console.error('error', error);
        });
    }
}

// -------------- TO PROFILE --------
export function toProfile() {
    console.log('To profile despachado')
    return function(dispatch) {
        return fetch(`http://localhost:3001/auth/profile`, {
            credentials: 'include'
        })
        .then((r) => r.json())
        .then((data) => {
            if(data){return}
            else {
                window.location= "/"
                swal("Primero debes iniciar sesión","", "error")
            }
            
        })
        .catch((error) => {
            console.log(error)
        });
    }
}