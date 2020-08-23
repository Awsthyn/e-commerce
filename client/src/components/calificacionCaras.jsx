import React from "react";
import { MDBContainer, MDBRating } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function RatingPage() {
    return (
        <MDBContainer>
            <MDBRating iconFaces fillClassName="black-text" iconRegular />
        </MDBContainer>
    );
}
