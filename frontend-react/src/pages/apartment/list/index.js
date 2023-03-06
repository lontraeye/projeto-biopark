import {
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { APARTMENT } from "../../../constants/url";
import { get } from "../../../utils/restUtils";

import "../../apartment/list/style.css";
import ApartmentModalForm from "../modal/index";


export default function ApartmentsList() {
    const [apartments, setApartments] = useState([]);
    const [isApartmentModalOpen, setIsApartmentModalOpen] = useState(false);
    const [apartmentSelected, setApartmentSelected] = useState(null);

    useEffect(() => {
        const constructor = async () => {
            await initLists();
        };
        constructor();
    }, []);

    const initLists = async () => {
        let apartmentsTemp = await get(APARTMENT);
        setApartments(apartmentsTemp);
    };

    function handleOpenApartmentModal(apartment) {
        setApartmentSelected(apartment);
        setIsApartmentModalOpen(true);
    }

    function handleCloseApartmentModal() {
        setIsApartmentModalOpen(false);
    }

    return (
        <div className="cards">
            {apartments
                .sort((a, b) => {
                    if (!a.tenant && b.tenant) {
                        return -1;
                    } else if (a.tenant && !b.tenant) {
                        return 1;
                    } else {
                        return a.rentValue - b.rentValue;
                    }
                })
                .map((apartment) => {
                    const isRented = Boolean(apartment.tenant);
                    return (
                        <div key={apartment.name}>
                            <div>
                                <Card className="apartmentCard">
                                    <CardContent>
                                        <div className="firstSet">
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                {apartment.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                {apartment.description}
                                            </Typography>
                                        </div>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            Aluguel: ${apartment.rentValue}
                                        </Typography>
                                        <Divider />
                                        <div className="secondSet">
                                            <Typography>
                                                {" "}
                                                Situação:
                                                {isRented
                                                    ? "Alugado"
                                                    : "Disponivel"}
                                            </Typography>
                                        </div>
                                    </CardContent>
                                    <CardActions className="buttons">
                                        <Button
                                            disabled={isRented}
                                            onClick={() =>
                                                handleOpenApartmentModal(
                                                    apartment
                                                )
                                            }
                                        >
                                            Alugar
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </div>
                    );
                })}
            <ApartmentModalForm
                isOpen={isApartmentModalOpen}
                handleCloseModal={handleCloseApartmentModal}
                idApartment={apartmentSelected?.id}
            />
        </div>
    );
}
