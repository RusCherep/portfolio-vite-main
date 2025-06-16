import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {IconLinks} from "../../../components/IconLinks.tsx";
import {useState} from "react";
import {Menu} from "../../../components/menu/Menu.tsx";


type MenuItem = {
    title: string;
    href: string;
};

export const MobileMenu = (props: { menuItems: MenuItem[] }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <StyledMobileMenu>

            <BurgerButton $isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup $isOpen={menuIsOpen} onClick={() => {
                setMenuIsOpen(false)
            }}>
                <Menu menuItems={props.menuItems}/>
                <IconLinks iconColor={"${theme.colors.lightModeBg}"}/>
            </MobileMenuPopup>

        </StyledMobileMenu>
    );
};


const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`

const MobileMenuPopup = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.94);
    display: none;

    ${props => props.$isOpen && css<{ $isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `}
    ul {

        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0 0 15px;
    }

    a {
        color: ${theme.colors.lightModeBg};

    }
`

const BurgerButton = styled.button<{ $isOpen: boolean }>`
    position: fixed;
    width: 50px;
    height: 50px;
    z-index: 9999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.lightContentTextPrimary};
        position: absolute;
        top: 0;
        right: 70px;

        ${props => props.$isOpen && css<{ $isOpen: boolean }>`
            background-color: rgba(255, 0, 0, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.lightContentTextPrimary};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.$isOpen && css<{ $isOpen: boolean }>`

                transform: translateY(0px) rotate(-45deg);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.lightContentTextPrimary};
            position: absolute;
            transform: translateY(10px);

            ${props => props.$isOpen && css<{ $isOpen: boolean }>`

                transform: translateY(0px) rotate(45deg);
                width: 36px;

            `}
        }
`



