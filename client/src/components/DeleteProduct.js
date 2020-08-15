import React from 'react'

function DeleteProduct({ id }){
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
            alert("El Producto se ha Eliminado correctamente")
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="mx-auto">
            <button className="btn btn-danger" onClick={handleClick}>Delete</button>
        </div>
    )
}

export default DeleteProduct
