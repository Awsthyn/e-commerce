import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import S from "../css/catalogo.module.css";

const catalogo = ({ array, categories, filter }) => {
    console.log(categories);
    return (
        <div className="container row">
            <div>
                <h1 className={S.title}>Categorias</h1>
                <ul>
                    {categories.map((e) => (
                        <Link>
                            <li
                                key={e}
                                id={e.id}
                                name={e.name}
                                onClick={(e) =>
                                    filter(e.target.getAttribute("name"))
                                }
                            >
                                {e.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="row">
                {array.map((e) => (
                    <ProductCard
                        key={e}
                        name={e.name}
                        price={e.price}
                        image={e.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default catalogo;
