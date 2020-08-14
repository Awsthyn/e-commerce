import React from "react";
import { MDBContainer, MDBRating } from "mdbreact";

export default function RatingPage() {
    return (
        <MDBContainer>
            <MDBRating iconFaces fillClassName="black-text" iconRegular />
        </MDBContainer>
    );
}
