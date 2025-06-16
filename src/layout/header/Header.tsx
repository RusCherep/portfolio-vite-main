import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {theme} from "../../styles/Theme.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";

const HeaderItems = [
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

export const Header = () => {
    return (
        <StyledHeader id={"header"}>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo logoId={"firstIconHeader"} height={"50px"} width={"50px"} viewBox="0 0 24 24" hover={false} />

                    <HeaderMenu menuItems={HeaderItems}/>

                    <MobileMenu menuItems={HeaderItems}/>

                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background-color: rgba(242, 242, 242, 0.9);
    font: 500 20px / 1.3 "DM Sans", sans-serif;
    text-align: center;
    color: ${theme.colors.lightContentTextPrimary};
`
