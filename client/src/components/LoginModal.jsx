import React from 'react'
import { connect } from 'react-redux'

export const LoginModal = () => {
    return (
<div className="modal fade mt-4" id="modalLoginForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header text-center">
        {/*<h4 className="modal-title w-100 font-weight-bold">Log in</h4>*/}
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body mx-3">
        <div className="form mb-1" >
          <input type="email" id="defaultForm-email" placeholder="Correo electrónico" className="form-control validate form-control-lg"/>
          <label data-error="wrong" data-success="right" htmlFor="defaultForm-email"></label>
        </div>

        <div className="form">
          <input type="password" id="defaultForm-pass" placeholder="Contraseña" className="form-control validate form-control-lg"/>
          <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass"></label>
        </div>
        <div className="d-flex justify-content-center">
      <button className="font-weight-bold btn btn-primary btn-lg" style={{width: "400px"}}>Iniciar sesión</button>
      </div>
      <p className="text-center mt-1">¿Olvidaste tu contraseña?</p>
      </div>
      <div className="modal-footer d-flex justify-content-center mb-3">
      <button className="font-weight-bold btn btn-success btn-lg">Crear cuenta</button>
      </div>
    </div>
  </div>
</div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
