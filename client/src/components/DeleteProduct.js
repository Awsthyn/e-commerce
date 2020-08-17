import React from 'react'

function DeleteProduct({ id, handleDelete }){
    const ProductId = id

    function handleClick() {
        console.log('Borrando ' + ProductId);
        const url = 'http://localhost:3001/products/' + ProductId;

        fetch(url, {
            method: 'DELETE',
            body: JSON.stringify({ id : ProductId }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.info(res)
            handleDelete(ProductId);
            alert("El Producto se ha Eliminado correctamente")
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="mx-auto">
            <button className="btn btn-danger" onClick={handleClick}>Eliminar</button>
        </div>
    )
}

export default DeleteProduct
