import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CrudUser extends Component {
    render() {
        return (
            <div>
            <table className="table table-dark mt-2">
              <thead>
                <tr className="d-flex justify-content-around">
                  <th scope="col">♦</th>
                  <th scope="col">Usuario</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr className="d-flex justify-content-around">
                  <th scope="row">1</th>
                  <td>Juansito</td>
                  <td type="button" className="btn btn-default btn btn-success">Editar</td>
                  <td type="button" className="btn btn-default btn btn-danger pull-right">Eliminar</td>
                </tr>
                <tr className="d-flex justify-content-around">
                  <th scope="row">2</th>
                  <td>Momia</td>
                  <td type="button" className="btn btn-default btn btn-success">Editar</td>
                  <td type="button" className="btn btn-default btn btn-danger">Eliminar</td>
                </tr>
                <tr className="d-flex justify-content-around">
                  <th scope="row">3</th>
                  <td>Caracol</td>
                  <td type="button" className="btn btn-default btn btn-success">Editar</td>
                  <td type="button" className="btn btn-default btn btn-danger">Eliminar</td>
                </tr>
              </tbody>
            </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CrudUser)
