import React from 'react'

//S58
const Review = (reviewDetails, usersArray) => {

    function buscarUsuario() {
        usersArray.map((e) => {
            if (reviewDetails.userId === e.id) {
                return e;
            };
        });
    };
    const userReview = buscarUsuario();

    return (
        <div>
            {/* FECHA DE CREACION */}
            <span>Creado el {reviewDetails.date}</span>
            {/* USUARIO QUE LA CREO */}
            <span>Review escrita por: {userReview.first_name}</span>
            {/* CALIFICACIÓN */}
            <div>Puntuación promedio de {reviewDetails.rating}</div>
            {/* DESCRIPCIÓN */}
            <span>{reviewDetails.description}</span>
        </div>
    );
};

export default Review;
