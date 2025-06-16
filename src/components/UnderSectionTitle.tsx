import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";
import {font} from "../styles/Common ts.tsx";

export const UnderSectionTitle = styled.span`
    display: flex;
    justify-content: center;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 60px;
    
    ${font({
        family: "'Poppins', sans-serif",
        color: theme.colors.lightContentTextPrimary,
        weight: 400,
        FMax: 32,
        FMin: 24,
        lineHeight: 0.8125,
    })}

    @media ${theme.media.tablet}{
    padding-bottom: 20px;
}
`