import "./style.css";

import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Buildings() {

    return (
        <div className="content">
            <div className="header">
                <div className="addButton">
                    <Link to="/building/register">
                    <p>Adicionar instalação</p>
                    <FaPlusCircle />
                    </Link>
                </div>
                <div className="addButton">
                    <Link to="/person/register">
                    <p>Adicionar pessoa</p>
                    <FaPlusCircle />
                    </Link>
                </div>
                <div className="addButton">
                    <Link to="/apartment/register">
                    <p>Adicionar apartamento</p>
                    <FaPlusCircle />
                    </Link>
                </div>
            </div>

            <div className="items">
                {Array.from(Array(20)).map((p) => (
                    <div key={p}>
                        <Link to={`/products/${p}`}>
                            <div className="itemContainer">
                                <img
                                    src="https://via.placeholder.com/250x150"
                                    alt="product"
                                />
                                <div className="text">
                                    <h3>Title</h3>
                                    <p>Description</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
