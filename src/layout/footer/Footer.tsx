import styled from "styled-components";

import {Menu} from "../../components/menu/Menu.tsx";
import { AboveLineFooter} from "../header/AboveLine.tsx";
import {Container} from "../../components/Container.tsx";
import {theme} from "../../styles/Theme.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

const FooterItems = [
    {
        title:"Home",
        href:"home"
    },
    {
        title:"About",
        href:"about"
    },
    {
        title:"Skills",
        href:"skills"
    },
    {
        title:"Projects",
        href:"projects"
    },
    {
        title:"Contact",
        href:"contact"
    },
]

export const Footer = () => {
    return (
        <StyledFooter id={"footer"}>
            <Container>
                <FlexWrapper justify={"space-between"} align={"baseline"} wrap={"wrap"} >
                    <AboveLineFooter/>

                    <Menu menuItems={FooterItems} textColor={`${theme.colors.lightHeadersColor}`}/>
                    <StyledSmallTextFooter>Designed and built by <StyledSelectedText> Cerepcovsky RV </StyledSelectedText> with <StyledSelectedText> Love </StyledSelectedText> & <StyledSelectedText>Tea</StyledSelectedText></StyledSmallTextFooter>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.lightModeBg};
    
    

    @media screen and (width < 970px) {
        ${FlexWrapper} {
            justify-content: center;
            margin-left: 0;
        }
    }

`
const StyledSmallTextFooter = styled.small`
    font: 400 18px / 1.44444 "Poppins", sans-serif;
    text-align: center;
    color: ${theme.colors.lightContentTextPrimary};
    padding: 15px 0;
    margin-left: 15px;
`
const StyledSelectedText = styled.span`
    font: 400 18px / 1.44444 "Poppins", sans-serif;
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
