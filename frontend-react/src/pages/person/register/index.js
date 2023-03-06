import { Button } from "@mui/material";
import React, { useState } from "react";
import ReactModal from "react-modal";
import { PERSON } from "../../../constants/url";
import { post } from "../../../utils/restUtils";

import "../../building/register/style.css";

const PersonForm = ({ isOpen, handleCloseModal }) => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState(null);
    const [personTypeEnum, setPersonTypeEnum] = useState("LOCADOR");

    const handleSubmit = async (event) => {
        await post(PERSON, { name, gender, personTypeEnum });
    };

    return (
        <ReactModal
            className="buildingModal"
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Example Modal"
        >
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Gênero:
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value={null}>Indefinido</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select>
                </label>
                <br />

                <label>
                    Tipo:
                    <select
                        value={personTypeEnum}
                        onChange={(e) => setPersonTypeEnum(e.target.value)}
                    >
                        <option value="LOCADOR">Locador</option>
                        <option value="LOCATARIO">Locatario</option>
                    </select>
                </label>
                <br />
                <Button type="submit">Enviar</Button>
                <Button variant="text" onClick={handleCloseModal}>
                    Fechar
                </Button>
            </form>
        </ReactModal>
    );
};

export default PersonForm;
