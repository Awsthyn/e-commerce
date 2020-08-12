import React from "react";

const productCard = ({ name, price, image }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="https://images.mediotiempo.com/PmwyUX2dhdem0VmpU09tAI4F62k=/958x596/uploads/media/2019/06/22/mano-dios-gol-maradona-inglaterra.jpg" class="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title text-center">La mano de Dios</h5>
        <h3 className="card-text text-center">$1.000.000</h3>
        <a href="#" className="btn btn-primary ml-auto mr-auto">
          See more details...
        </a>
      </div>
    </div>
  );
};

export default productCard;
