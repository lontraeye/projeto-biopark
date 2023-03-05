import "./style.css";

import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import BuildingForm from "../register/index";

Modal.setAppElement("#root");

export default function Buildings() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="content">
      <div className="header">
        <div className="addButton">
          <Link onClick={handleOpenModal}>
            <p>Adicionar Edificio</p>
            <FaPlusCircle />
          </Link>
        </div>
      </div>
      <BuildingForm isOpen={isModalOpen} handleCloseModal={handleCloseModal} />

      <div className="items">
        {Array.from(Array(20)).map((p) => (
          <div key={p}>
            <Link to={`/products/${p}`}>
              <div className="itemContainer">
                <img src="https://via.placeholder.com/250x150" alt="product" />
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
