import {GET_SEARCHED_PRODUCTS} from './constants';



export const onSearch = (valor) => dispatch => {
    fetch(`http://localhost:3001/search?query=${valor}`)
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
            dispatch({ type: GET_SEARCHED_PRODUCTS, payload: data})
        })
        .catch((error) => {
            console.error(error);
        });

}

/*
export const getExercises = () => dispatch => {
    axios
    .get("http://localhost:5000/exercises/")
    .then(res =>
    dispatch({
    type: GET_EXERCISES,
    payload: res.data
    })
    )
    .catch(err => {
    console.log(err);
    });
    };
    */
