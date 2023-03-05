import React, { useState } from "react";
import { PERSON } from "../../../constants/url";
import { post } from "../../../utils/restUtils";

const PersonForm = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState(null);
    const [personTypeEnum, setPersonTypeEnum] = useState("LOCADOR");

    const handleSubmit = async (event) => {
        await post(PERSON, { name, gender, personTypeEnum });
    };

    return (
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
            <button type="submit">Submit</button>
        </form>
    );
};

export default PersonForm;
