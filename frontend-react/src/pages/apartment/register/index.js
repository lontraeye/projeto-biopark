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
import "../register/style.css";
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import {
    APARTMENT,
    BUILDING,
    PERSON_LESSOR,
    PERSON_TENANT,
} from "../../../constants/url";
import { get, post } from "../../../utils/restUtils";

const ApartmentForm = ({ isOpen, handleCloseModal }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [number, setNumber] = useState("");
    const [rentValue, setRentValue] = useState("");
    const [lessor, setLessor] = useState(null);
    const [tenant, setTenant] = useState(null);
    const [building, setBuilding] = useState(null);
    const [lessors, setLessors] = useState([]);
    const [tenants, setTenants] = useState([]);
    const [buildings, setBuildings] = useState([]);

    useEffect(() => {
        const constructor = async () => {
            await initLists();
        };
        constructor();
    }, []);

    const initLists = async () => {
        let lessorsTemp = await get(PERSON_LESSOR);
        let tenantsTemp = await get(PERSON_TENANT);
        let buildingsTemp = await get(BUILDING);
        setLessors(lessorsTemp);
        setTenants(tenantsTemp);
        setBuildings(buildingsTemp);
    };

    const handleSubmit = async (event) => {
        await post(APARTMENT, {
            name,
            description,
            number,
            rentValue,
            lessor,
            tenant,
            building,
        });
        // TODO: send data to backend API
    };

    const handleChangeLessor = (event) => {
        setLessor(lessors[event.target.value]);
    };

    const handleChangeTenant = (event) => {
        setTenant(tenants[event.target.value]);
    };

    const handleChangeBuilding = (event) => {
        setBuilding(buildings[event.target.value]);
    };

    return (
        <ReactModal
            className="apartmentModal"
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Example Modal"
        >
            <div className="modalHeader">
                <h3>Cadastre um apartamento</h3>
            </div>
            <Divider className="divider" />
            <form onSubmit={handleSubmit} className="inputs">
                <TextField
                    type="text"
                    label="Nome"
                    variant="filled"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!name}
                    helperText={
                        !name ? "Campo obrigatório" : "Campo obrigatório"
                    }
                />
                <TextField
                    type="text"
                    label="Descrição"
                    variant="filled"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                    type="text"
                    label="Número"
                    variant="filled"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    error={!number}
                    helperText={
                        !number ? "Campo obrigatório" : "Campo obrigatório"
                    }
                />
                <TextField
                    type="text"
                    label="Valor do aluguel"
                    variant="filled"
                    value={rentValue}
                    onChange={(e) => setRentValue(e.target.value)}
                    error={!rentValue}
                    helperText={
                        !rentValue ? "Campo obrigatório" : "Campo obrigatório"
                    }
                />
                <FormControl helperText="Campo obrigatório">
                    <InputLabel id="demo-multiple-name-label">
                        Locador
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        variant="filled"
                        id="demo-simple-select"
                        onChange={handleChangeLessor}
                        value={lessors.name}
                    >
                        {lessors.map((lessorValue, index) => (
                            <MenuItem key={index} value={index}>
                                {lessorValue.name}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Campo obrigatório</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel id="demo-multiple-name-label">
                        Locatario
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        variant="filled"
                        id="demo-simple-select"
                        onChange={handleChangeTenant}
                        value={tenants.name}
                        helperText="Campo obrigatório"
                    >
                        {tenants.map((tenantValue, index) => (
                            <MenuItem key={index} value={index}>
                                {tenantValue.name}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Campo obrigatório</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel id="demo-multiple-name-label">
                        Edificio
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        variant="filled"
                        id="demo-simple-select"
                        onChange={handleChangeBuilding}
                        value={buildings.name}
                    >
                        {buildings.map((buildingValue, index) => (
                            <MenuItem key={index} value={index}>
                                {buildingValue.name}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Campo obrigatório</FormHelperText>
                </FormControl>
                <div className="modalButtons">
                    <Button type="submit">Submit</Button>
                    <Button variant="text" onClick={handleCloseModal}>
                        Fechar
                    </Button>
                </div>
            </form>
        </ReactModal>
    );
};

export default ApartmentForm;
