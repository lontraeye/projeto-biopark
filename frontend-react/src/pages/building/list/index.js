import "./style.css";

import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import BuildingForm from "../register/index";
import ApartmentForm from "../../apartment/register/index";
import { APARTMENT, BUILDING } from "../../../constants/url";
import { get } from "../../../utils/restUtils";
import { FormLabel } from "react-bootstrap";
import { Box } from "@mui/system";

Modal.setAppElement("#root");

export default function Buildings() {
    const [isBuildingModalOpen, setIsBuildingModalOpen] = useState(false);
    const [isApartmentModalOpen, setIsApartmentModalOpen] = useState(false);
    const [buildings, setBuildings] = useState([]);
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        const constructor = async () => {
            await initLists();
        };
        constructor();
    }, []);

    const initLists = async () => {
        let buildingsTemp = await get(BUILDING);
        setBuildings(buildingsTemp);
        let apartmentsTemp = await get(APARTMENT);
        setApartments(apartmentsTemp);
    };
    
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
            <BuildingForm
                isOpen={isBuildingModalOpen}
                handleCloseModal={handleCloseBuildingModal}
            />
            <ApartmentForm
                isOpen={isApartmentModalOpen}
                handleCloseModal={handleCloseApartmentModal}
            />
            <div className="itemSpace">
                <div className="items">
                    <div>
                        <h1>Apartamentos por edificio</h1>
                        {buildings.map((building) => (
                            <div key={building.name} className="buildings">
                                <FormLabel>Edificio: {building.name}</FormLabel>
                                <Box className="buildingWrapper">
                                    <ul>
                                        {apartments
                                            .filter(
                                                (apartment) =>
                                                    apartment.building.id ===
                                                    building.id
                                            )
                                            .map((apartment) => (
                                                <li key={apartment.name}>
                                                    <div className="apartmentWrapper">
                                                    <h3>Apartamento: {apartment.name}</h3>
                                                    <p>
                                                        {apartment.description}
                                                    </p>
                                                    </div>
                                                </li>
                                            ))}
                                    </ul>
                                </Box>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
