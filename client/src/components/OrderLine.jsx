import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Counter from '../components/Counter';

export class OrderLine extends Component {
  render() {
    return (
      <div>
        <table className="table table-dark mt-2 table-striped ">       
          <tbody>           
            <tr className="d-flex justify-content ml-5">
              <td type="button btn-sm" className="btn btn-danger btn-sm">X</td>
              <td>aca una foto</td>
              <td>La Mano de dios</td>
              <td>$ 1000000</td>
              <td>
                  <Counter/>
              </td>
              <td>$ 5000000</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderLine)
