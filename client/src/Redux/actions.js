import {GET_SEARCHED_PRODUCTS} from './constants';

export function getSearchedProducts(keyword) {
    return function(dispatch) {
        return fetch(`http://localhost:3001/search?query=${valor}`)
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
            dispatch({ type: GET_SEARCHED_PRODUCTS, payload: data})
        })
        .catch((error) => {
            console.error(error);
        });
    }
}
