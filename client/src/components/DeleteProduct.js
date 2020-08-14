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
        }).then(res => console.info(res))
        .catch(err => console.error(err))
    }

    return (
        <div>
            <button className="btn btn-warning" onClick={handleClick}>Delete</button>
        </div>
    )
}

export default DeleteProduct
