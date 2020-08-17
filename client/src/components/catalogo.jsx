import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import S from "../css/catalogo.module.css";


const catalogo = ({ array, categories, filter, toProductDetails, getProd }) => {
    
    return (
        
            <div className="container-fluid row">
            <div className="col-md-3">
                <h1 className={S.title}>Categorias</h1>
                <Link>
                    <li onClick={()=>(getProd())}>
                        <b>Todos los productos</b>
                    </li>
                </Link>
                
                    {categories.map((e) => (
                        <Link to={`/catalogo/${e.name}`}>
                            <li
                                key={e}
                                id={e.id}
                                name={e.name}
                                onClick={(e) =>
                                    filter(e.target.getAttribute("name"))
                                }>
                                {e.name}
                            </li>
                        </Link>
                    ))}
                
            </div>
            <div className="row col-md-9">
                {array.map((e) => (
                    <ProductCard
                        key={e}
                        id = {e.id}
                        name={e.name}
                        price={e.price}
                        toProductDetails= {toProductDetails}
                        image={`http://ecommerce-g5.tk/server-fotos/${e.images[1].url}.jpg`}
                    />
                ))}
            </div>
        </div>
        
    );

};

export default catalogo;
