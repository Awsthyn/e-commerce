import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllUsers } from "../Redux/actions/userActions"

export class CrudUser extends Component {
      constructor(props) {
          super(props);
        }
            render() {
              return (
              <div className="container-fluid mt-4    ">
                  <div className={s.product_container}>
                      <div className={s.product_img}>
                          <img className="m-1" src={"https://i.picsum.photos/id/472/337/337.jpg?hmac=bEq_WPOsjZOK3h-HVzIHCZZOiqLipC3jSf46XC8NUoE"} alt={productDetails.name} />
                          <div className= "d-flex flex-row justify-content-around  w-75">
                              <img className="w-25 m-1" src={"https://i.picsum.photos/id/480/200/200.jpg?hmac=q_kzh_8Ih85_5t_jN3rcD3npeNBLA41oDGtQZVkmmYs"} alt={productDetails.name} />
                              <img className="w-25 m-1" src={"https://i.picsum.photos/id/480/200/200.jpg?hmac=q_kzh_8Ih85_5t_jN3rcD3npeNBLA41oDGtQZVkmmYs"} alt={productDetails.name} />
                              <img className="w-25 m-1" src={"https://i.picsum.photos/id/480/200/200.jpg?hmac=q_kzh_8Ih85_5t_jN3rcD3npeNBLA41oDGtQZVkmmYs"} alt={productDetails.name} />
                          </div>
                      </div>
                      <div className={s.product_data}>
                          <h3 className="pt-4 pb-3">{productDetails.name}</h3>
                          <h5>${productDetails.name}</h5>
                          <hr></hr>
                          <h6>Stock: {productDetails.stock}</h6>
                          <hr></hr>
                          <p>{productDetails.description}</p>
                          <hr></hr>
                          <div>
                              <RatingPage />
                          </div>
                          <hr></hr>
                          <button data-id={productDetails.id} type= 'button' className="btn btn-dark ml-auto mr-auto" onClick={(e) => {
                    history.push(`/Order`)
                    store.dispatch(toProductDetails(productDetails.id))
                  }}>Agregar al carrito</button>
                      </div>
                      {/* <rating.js file */}
                      <script src="js/addons/rating.js"></script>
                  </div>
              </div>
              );
            }
        }

function mapStateToProps(state) {
  return {
      users: state.users.users,
    };
}

function mapDispatchToProps(dispatch) {
    return {
      getAllUsers: () => dispatch(getAllUsers())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CrudUser)
