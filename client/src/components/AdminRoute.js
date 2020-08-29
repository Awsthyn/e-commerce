import React from "react";
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ component: Component, sessionUser, ...rest }) => {
    if (!sessionUser){
        console.info('AdminRoute, redirigiendo a login')
        return (
            <Redirect to="/Login" />
        )
    }

    const redirect = () => {
        console.info('redirigiendo no autorizado')
        window.alert('No está autorizado')
        return (<Redirect to='/' />)
    }

    return (
        <Route {...rest} render={(props) => {
            console.info('sessionUser.admin:', sessionUser.admin)
            return (sessionUser.admin
                ? <Component {...props} />
                : redirect())
            }
    }/>)
}

function mapStateToProps(state) {
	return {
		sessionUser: state.session.sessionUser,
	};
}

function mapDispatchToProps(dispatch){
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminRoute)
