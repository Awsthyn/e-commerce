import React from "react";
import { MDBContainer, MDBRating } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

export default function RatingPage() {
    return (
        <MDBContainer>
            <MDBRating iconFaces fillClassName="black-text" iconRegular />
        </MDBContainer>
    );
}
