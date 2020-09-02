import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../../css/checkout.module.css'
// import { handleChange } from '../CRUDS/userCrud/EditUserForm'


export class Checkout extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
          show: false,
          email: ""
              }
      this.handleChange = this.handleChange.bind(this);
    }
      handleChange(e){
      this.setState({[e.target.name]: e.target.value})
      }
      render(){
        return (
            <div className= "container mt-5">
            <hr>
            </hr>


              <form action="#" className="credit-card-div">
                    <div className="panel panel-default" >
                        <div className="panel-heading">
                            <div className="row ">
                                <div className="col-md-12">
                                    <input type="text" className="form-control" placeholder="Enter Card Number" />
                                </div>
                            </div>
                                <div className="row ">
                                    <div className="col-md-3 col-sm-3 col-xs-3">
                                    <span className="help-block text-muted small-font" > Expiry Month</span>
                                    <input type="text" className="form-control" placeholder="MM" />
                                </div>
                                    <div className="col-md-3 col-sm-3 col-xs-3">
                                        <span className="help-block text-muted small-font" >  Expiry Year</span>
                                        <input type="text" className="form-control" placeholder="YY" />
                                    </div>
                                        <div className="col-md-3 col-sm-3 col-xs-3">
                                            <span className="help-block text-muted small-font" >  CCV</span>
                                            <input type="text" className="form-control" placeholder="CCV" />
                                        </div>
                                            <div className="col-md-3 col-sm-3 col-xs-3">
                                                <img src="" className="img-rounded" />
                                            </div>
                                        </div>
                                            <div className="row ">
                                                <div className="col-md-12 pad-adjust">
                                                <input type="text" className="form-control" placeholder="Name On The Card" />
                                            </div>
                                        </div>
                                            <div className="row">
                                                <div className="col-md-12 pad-adjust">
                                                    <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" checked className="text-muted"/> Save details for fast payments <a href="#"> learn how ?</a>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                      <div className="row ">
                                        <div className="container ">
                                            <form onSubmit={this.handleSubmit} className="form-group">
                                                <div className="form-group">
                                                    <label>Confirmar Correo:</label>
                                                    <input type="email" id="email" name="email" onChange={this.handleChange} className="form-control" value={this.state.email} required/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Confirmar Dirección:</label>
                                                    <input type="text" id="address" name="address" onChange={this.handleChange} className="form-control" value={this.state.address} required/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Confirmar Localidad:</label>
                                                    <input type="text" id="locality" name="locality" onChange={this.handleChange} className="form-control" value={this.state.locality} required />
                                                </div>
                                                <div className="form-group">
                                                    <label>Confirmar Provincia/Estado:</label>
                                                    <input type="text" id="state" name="state" onChange={this.handleChange} className="form-control" value={this.state.state} required />
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6 col-xs-6 pad-adjust">
                                                        <input type="submit"  className="btn btn-danger" value="CANCEL" />
                                                    </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 pad-adjust">
                                                        <input type="submit"  className="btn btn-warning btn-block" value="PAY NOW" />
                                                    </div>
                                                    <hr>
                                                    </hr>


                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
        )}
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
