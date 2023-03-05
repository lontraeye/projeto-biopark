import React, { useEffect, useState } from "react";
import {
    APARTMENT,
    BUILDING,
    PERSON_LESSOR,
    PERSON_TENANT,
} from "../../../constants/url";
import { get, post } from "../../../utils/restUtils";

const ApartmentForm = () => {
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
    }

    const handleChangeTenant = (event) => {
        setTenant(tenants[event.target.value]);
    }

    const handleChangeBuilding = (event) => {
        setBuilding(buildings[event.target.value]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Description:
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <br />
            <label>
                Number:
                <input
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
            </label>
            <br />
            <label>
                Rent Value:
                <input
                    type="text"
                    value={rentValue}
                    onChange={(e) => setRentValue(e.target.value)}
                />
            </label>
            <br />
            <label>
                Lessor:
                <select onChange={handleChangeLessor}>
                    <option value={null}>Selecione</option>
                    {lessors.map((lessorValue, index) => (
                        <option key={index} value={index}>{lessorValue.name}</option>
                    ))}
                </select>
            </label>
            <br />
            <label>
                Tenant:
                <select onChange={handleChangeTenant}>
                    <option value={null}>Selecione</option>
                    {tenants.map((tenantValue, index) => (
                        <option key={index} value={index}>{tenantValue.name}</option>
                    ))}
                </select>
            </label>
            <br />
            <label>
                Building:
                <select onChange={handleChangeBuilding}>
                    <option value={null}>Selecione</option>
                    {buildings.map((buildingValue, index) => (
                        <option key={index} value={index}>{buildingValue.name}</option>
                    ))}
                </select>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ApartmentForm;
