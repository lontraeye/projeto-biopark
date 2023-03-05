import { Button, Divider, TextField } from "@mui/material";
import React, { useState } from "react";
import ReactModal from "react-modal";
import { BUILDING } from "../../../constants/url";
import { post } from "../../../utils/restUtils";

import "../register/style.css";

function BuildingForm({ isOpen, handleCloseModal, handleSubmit }) {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  
  const handleFormSubmit = async (event) => {
    await post(BUILDING, { name, description });
  };

  return (
    <ReactModal
      className="buildingModal"
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Example Modal"
    >
      <div className="modalHeader">
        <h2>Cadastre um edificio</h2>
      </div>
      <Divider className="divider" />
      <form onSubmit={handleFormSubmit}>
        <div className="inputs">
          <TextField
            type="text"
            label="Nome"
            variant="filled"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!name}
            helperText={!name ? "Campo obrigatório" : "Campo obrigatório"}
          />
          <TextField
            type="text"
            label="Descrição"
            variant="filled"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="modalButtons">
          <Button variant="text" type="submit" disabled={!name}>
            Enviar
          </Button>
          <Button variant="text" onClick={handleCloseModal}>
            Fechar
          </Button>
        </div>
      </form>
    </ReactModal>
  );
}

export default BuildingForm;
