import "./style.css";

import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import BuildingForm from "../register/index";
import ApartmentForm from "../../apartment/register/index"

Modal.setAppElement("#root");

export default function Buildings() {
  const [isBuildingModalOpen, setIsBuildingModalOpen] = useState(false);
  const [isApartmentModalOpen, setIsApartmentModalOpen] = useState(false);

  function handleOpenBuildingModal() {
    setIsBuildingModalOpen(true);
  }

  function handleCloseBuildingModal() {
    setIsBuildingModalOpen(false);
  }
  function handleOpenApartmentModal() {
    setIsApartmentModalOpen(true);
  }

  function handleCloseApartmentModal() {
    setIsApartmentModalOpen(false);
  }


  return (
    <div className="content">
      <div className="header">
        <div className="addButton">
          <Link onClick={handleOpenBuildingModal}>
            <p>Adicionar Edificio</p>
            <FaPlusCircle />
          </Link>
        </div>
        <div className="addButton">
          <Link onClick={handleOpenApartmentModal}>
            <p>Adicionar Apartamento</p>
            <FaPlusCircle />
          </Link>
        </div>
      </div>
      <BuildingForm isOpen={isBuildingModalOpen} handleCloseModal={handleCloseBuildingModal} />
      <ApartmentForm isOpen={isApartmentModalOpen} handleCloseModal={handleCloseApartmentModal} />
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
