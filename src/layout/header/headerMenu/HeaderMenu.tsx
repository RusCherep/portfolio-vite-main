import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {IconLinks} from "../../../components/IconLinks.tsx";
import {Menu} from "../../../components/menu/Menu.tsx";

type HeaderMenuPropsType = {
    menuItems: menuItem[];
    textColor?: string;
}

type menuItem = {
    title: string;
    href: string;
}

export const HeaderMenu = (props: HeaderMenuPropsType) => {
    return (
        <StyledMenu>
            <Menu textColor={`${theme.colors.lightContentTextPrimary}`} menuItems={props.menuItems} />
            <IconLinks iconColor={`${theme.colors.lightContentTextPrimary}`} iconColorHover={`${theme.colors.lightHeadersColor}`} hover={true} hoverScale={true}/>
        </StyledMenu>
    );
}


const StyledMenu = styled.nav`
    display: flex;
    align-items: center;


    ul {
        display: flex;
        gap: 30px;
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`

