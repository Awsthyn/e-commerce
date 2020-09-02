import { LOGIN, LOGOUT, GET_FORGOTTEN_USER, PURCHASED_PRODUCTS } from './constants';
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
            window.localStorage.setItem('guestCart', JSON.stringify([]))
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


// ------------- TRAE TODOS LOS USUARIOS, PARA DEJAR EL OLVIDADIZO


export function getForgottenUser(email) {
    // alert('asd')
    return function(dispatch) {
        return fetch(`http://localhost:3001/users`, {
            credentials: 'include'
        })
        .then((r) => r.json())
        .then((data) => {
            dispatch({ type: GET_FORGOTTEN_USER, payload: data.filter(e => e.email === email)})
        })
        // .then(  window.location = "/ResetQuestion")
        .catch((error) => {
            console.error(error);
        });
    }
}


//---------- "LOGUEA forgotten user" --------------
export function fakeLogUser() {
    return {type: "FAKE_LOGIN"}
}


// -----------------TRAE LOS PRODUCTOS COMPRADOS DEL USUARIO LOGUEADO --------
export function purchasedProducts(userId){
    console.log(userId)
    return function (dispatch) {
        return fetch(`http://localhost:3001/users/${userId}/purchasedproducts`, {
            credentials: 'include' 
        })
        .then((r) => r.json())
        .then((data) => {
            
            dispatch({ type: PURCHASED_PRODUCTS, payload: data})
        })
        .catch((error) => {
            console.error(error);
        });
    }
}