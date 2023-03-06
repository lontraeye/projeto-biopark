import {
    Button,
    Divider,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import ReactModal from "react-modal";
import { PERSON } from "../../../constants/url";
import { post } from "../../../utils/restUtils";

import "../../person/register/style.css";

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
            <form onSubmit={handleSubmit} className="form">
                <div className="modalHeader">
                    <h3>Cadastre uma pessoa</h3>

                    <Divider className="divider" />
                </div>
                <TextField
                    type="text"
                    label="Nome"
                    variant="filled"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!name}
                    helperText={!name ? "Campo obrigatório" : ""}
                />

                <FormControl helperText="Campo obrigatório">
                    <InputLabel id="demo-multiple-name-label">
                        Gênero
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        variant="filled"
                        id="demo-simple-select"
                        onChange={(e) => setGender(e.target.value)}
                        value={gender}
                        MenuProps={{
                            disableScrollLock: true,
                        }}
                    >
                        <MenuItem value={"Indefinido"}>Indefinido</MenuItem>
                        <MenuItem value={"Masculino"}>Masculino</MenuItem>
                        <MenuItem value={"Feminino"}>Feminino</MenuItem>
                    </Select>
                    <FormHelperText>Campo obrigatório</FormHelperText>
                </FormControl>

                <FormControl helperText="Campo obrigatório">
                    <InputLabel id="demo-multiple-name-label">
                        Locador
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        variant="filled"
                        id="demo-simple-select"
                        onChange={(e) => setPersonTypeEnum(e.target.value)}
                        value={personTypeEnum}
                        MenuProps={{
                            disableScrollLock: true,
                        }}
                    >
                        <MenuItem value={"LOCADOR"}>Locador</MenuItem>
                        <MenuItem value={"LOCATARIO"}>Locatario</MenuItem>
                    </Select>
                    <FormHelperText>Campo obrigatório</FormHelperText>
                </FormControl>
                <div className="buttons">
                    <Button type="submit">Enviar</Button>
                    <Button variant="text" onClick={handleCloseModal}>
                        Fechar
                    </Button>
                </div>
            </form>
        </ReactModal>
    );
};

export default PersonForm;
