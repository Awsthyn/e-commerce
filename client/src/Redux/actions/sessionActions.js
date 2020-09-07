import { LOGIN, LOGOUT, GET_FORGOTTEN_USER, PURCHASED_PRODUCTS } from './constants';
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
            dispatch({type: LOGIN, payload: res})
            window.location.reload()
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


//Trae req.user

export function getLoguedUser() {
    return function(dispatch) {
        return fetch("http://localhost:3001", {
            method: "GET",
            credentials: "include"
  })
    .then(response => {
      if (response.status === 200) return response.json();
      throw new Error("failed to authenticate user");
    })
    .then(res => {
        console.log(res)
        dispatch({type: "LOGIN", payload: res})
        return res
    })
    }
}



// ======================== RESET PASSWORD ACTIONS =================

// ------------- Envia email con token ---------------
export function sendForgotMail(email) {
    console.log('EMAIL',email)
    return function(dispatch) {
        return fetch(`http://localhost:3001/resetPassword/forgot`, {
            method: 'POST',
            body: JSON.stringify(email),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include' 
        })
        .catch((error) => {
            console.error(error);
        });
    }
}

//------------ Trae el usuario dueño del token ----------------
export function getForgottenUser(token) {
    return function(dispatch) {
        return fetch(`http://localhost:3001/resetPassword/reset/${token}`, {
            credentials: "include"
        })
        .then((r) => r.json())
        .then(res => {
            dispatch({type: GET_FORGOTTEN_USER, payload: res})
        })
        .catch(err => console.log(err))
    }
}

//------------ Ejecuta el cambio de contraseña ---------------
export function changePassword(token, password) {
    return function(dispatch) {
        return fetch(`http://localhost:3001/resetPassword/reset/${token}`, {
            method: 'PUT',
            body: JSON.stringify(password),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include' 
        })
        .catch((error) => {
            console.error(error);
        });
    }
}