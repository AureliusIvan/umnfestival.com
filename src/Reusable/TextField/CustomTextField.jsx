import { TextField } from "../MaterialUICoreLazy/MaterialUICoreLazy";
import styled from "styled-components";

export const CustomTextField = styled(TextField)({
    width: "100%",
    height: "40px",
    marginBottom: "10px",
    marginTop: "10px",
    "& .MuiInput-underline:after": {
        borderBottomColor: "green"
    },
    "& .MuiinputBase-input": {
        color: "green",
        background: "red"
    },
    "& .MuiInput-underline:before": {
        borderBottomColor: "green"
    }
});