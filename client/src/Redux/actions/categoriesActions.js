import { GET_ALL_CATEGORIES, DELETE_CATEGORY} from './constants';

//------------  CATEGORIAS  -----------------------------------------------------------

export function getAllCategories() {
    return function(dispatch){
        return fetch(`http://localhost:3001/categories`)
        .then((r) => r.json())
        .then((data) => {
            console.log('fetch categ', data)
            dispatch({type: GET_ALL_CATEGORIES, payload: data})
        })
        .catch((error) => {console.log(error)})
    }
}

//------------ ELIMINA UNA CATEGORIA  -----------------------------

export function onDeleteCategory(CategoryId) {
    return function(dispatch) {
        return fetch(`http://localhost:3001/categories/${CategoryId}`, {
        method: 'DELETE',
        body: JSON.stringify({ id : CategoryId }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.info("fetch delete category")
        dispatch({type: DELETE_CATEGORY, payload: res})
        alert("La Categoria se ha Eliminado correctamente")
        window.location = "/CrudCategory";
    })
    .catch(err => console.error(err))
    }
}