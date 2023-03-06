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

export default function ApartmentsList() {
    const [apartments, setApartments] = useState([]);

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

    return (
        <div className="cards">
            {apartments.map((apartment) => {
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
                                    <Button size="small">Alugar</Button>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
