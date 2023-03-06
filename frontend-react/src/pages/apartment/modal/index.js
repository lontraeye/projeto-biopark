import {
    Button,
    Divider,
    FormControl,
    InputAdornment,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import {
    APARTMENT,
    PERSON_LESSOR,
    PERSON_TENANT,
} from "../../../constants/url";
import { get, put } from "../../../utils/restUtils";
import { FormLabel } from "react-bootstrap";

import "../modal/style.css";

const ApartmentFormModal = ({ isOpen, handleCloseModal, idApartment }) => {
    const [lessors, setLessors] = useState([]);
    const [tenants, setTenants] = useState([]);

    const [apartment, setApartment] = useState(null);
    const [rentValue, setRentValue] = useState(null);
    const [lessor, setLessor] = useState(null);
    const [tenant, setTenant] = useState(null);

    useEffect(() => {
        const constructor = async () => {
            await initLists();
        };
        constructor();
    }, []);

    useEffect(() => {
        const constructor = async () => {
            await updateApartment();
        };
        constructor();
    }, [idApartment]);

    const updateApartment = async () => {
        let apartmentTemp = await get(`${APARTMENT}/${idApartment}`);
        setRentValue(apartmentTemp.rentValue);
        setLessor(lessors.filter((l) => l.id === apartmentTemp.lessor.id)[0]);
        setTenant(tenants.filter((t) => t.id === apartmentTemp.lessor.id)[0]);
        setApartment(apartmentTemp);
    };
    const initLists = async () => {
        let lessorsTemp = await get(PERSON_LESSOR);
        let tenantsTemp = await get(PERSON_TENANT);
        setLessors(lessorsTemp);
        setTenants(tenantsTemp);
    };

    const handleSubmit = async (event) => {
        await put(APARTMENT, {
            ...apartment,
            rentValue,
            lessor,
            tenant,
        });
    };

    return (
        <ReactModal
            className="apartmentModal"
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
        >
                <div className="modalHeader">
                    <h3>Cadastre um apartamento</h3>
                </div>
                <Divider className="divider" />
                <form onSubmit={handleSubmit} className="form">
                    <FormControl helperText="Campo obrigatório">
                        <FormLabel>Valor do aluguel</FormLabel>
                        <TextField
                            type="number"
                            variant="filled"
                            value={rentValue}
                            onChange={(e) => setRentValue(e.target.value)}
                            error={!rentValue}
                            helperText={
                                !rentValue
                                    ? "Campo obrigatório"
                                    : "Campo obrigatório"
                            }
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        $
                                    </InputAdornment>
                                ),
                            }}
                        >
                            {" "}
                            <FormLabel>Valor do aluguel</FormLabel>
                        </TextField>
                        <FormLabel>Locador</FormLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            variant="filled"
                            id="demo-simple-select"
                            onChange={(e) => setLessor(e.target.value)}
                            value={lessor}
                            MenuProps={{
                                disableScrollLock: true,
                            }}
                        >
                            {lessors.map((lessorValue, index) => (
                                <MenuItem key={index} value={lessorValue}>
                                    {lessorValue.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Locatário</FormLabel>

                        <Select
                            labelId="demo-simple-select-label"
                            variant="filled"
                            id="demo-simple-select"
                            onChange={(e) => setTenant(e.target.value)}
                            value={tenant}
                            helperText="Campo obrigatório"
                            MenuProps={{
                                disableScrollLock: true,
                            }}
                        >
                            {tenants.map((tenantValue, index) => (
                                <MenuItem key={index} value={tenantValue}>
                                    {tenantValue.name}
                                </MenuItem>
                            ))}
                        </Select>
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

export default ApartmentFormModal;
