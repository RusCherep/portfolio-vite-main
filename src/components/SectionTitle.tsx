import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";
import {font} from "../styles/Common ts.tsx";

export const SectionTitle = styled.h2`
    display: flex;
    justify-content: center;
    text-align: center;
    

    ${font({
        family: "'Poppins', sans-serif",
        color: theme.colors.lightHeadersColor,
        weight: 700,
        FMax: 48,
        FMin: 36,
        lineHeight: 1.2069
    })}

`