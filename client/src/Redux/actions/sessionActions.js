import { LOGIN, LOGOUT } from './constants';
import swal from 'sweetalert';
import { persistor } from '../store';

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
            dispatch({type: LOGIN, payload: res})
            console.log(JSON.parse(localStorage.getItem('guestCart')))
            return fetch(`http://localhost:3001/users/${res.id}/guestToCart/`, {
                method: 'POST',
                body: JSON.stringify({orderLines: JSON.parse(localStorage.getItem('guestCart'))}),
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include' 
            })
        })
        .then(()=>{
            window.location.reload()
            swal('Los productos que estaban en el carrito de invitado pasaron a tu carrito')
        })
        .catch(err =>{
            swal('Datos incorrectos'); 
            console.error(err)})
    }
}

// ----------------- LOGOUT --------
export function sessionLogout() {
    console.log('accion despachada')
    return function(dispatch) {
        
        return fetch(`http://localhost:3001/auth/logout`, {
            credentials: 'include'
        })
        .then(() => {
            dispatch({ type: LOGOUT})
                // para que redux no restaure la session
                persistor.flush()
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