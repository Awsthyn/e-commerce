import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import OrderLine from '../components/OrderLine';

export class Order extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
        <div>
            <h1 className="d-flex justify-content-center m-3">Carrito</h1>
            <OrderLine/>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
