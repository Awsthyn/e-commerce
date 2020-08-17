import React from 'react'

function DeleteCategory({ id, handleDelete }){
    const CategoryId = id

    function handleClick() {
        console.log('Borrando ' + CategoryId);
        const url = 'http://localhost:3001/categories/' + CategoryId;

        fetch(url, {
            method: 'DELETE',
            body: JSON.stringify({ id : CategoryId }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.info(res)
            handleDelete(CategoryId);
            alert("La categoría se ha Eliminado correctamente")
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="mx-auto">
            <button className="btn btn-danger" onClick={handleClick}>Eliminar</button>
        </div>
    )
}

export default DeleteCategory
