import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";


type MenuItem = {
    title: string;
    href: string;
};

 type MenuPropsType = {
     menuItems:MenuItem[];
     textColor?: string;

 }

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => (
                    <ListItemsMenu key={index}>
                        <StyledLink $textColor={props.textColor} href={`#${item.href}`}>{item.title}</StyledLink>
                    </ListItemsMenu>
                ))}
            </ul>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;

        @media screen and (${theme.media.mobile}) {
            flex-direction: column;
            align-items: center;
            margin-top: 10px;
            gap: 10px;
        }
    }

    // @media${theme.media.tablet}{
    //     display: none;
    // }


`
const ListItemsMenu =  styled.li`

    &:hover {
        color: ${theme.colors.lightHeadersColor};
        transform: scale(1.5);
        transition: all 0.3s ease;

        &::before {
            content: "";
            display: inline-block;
            height: 2px;
            background-color: ${theme.colors.lightHeadersColor};
            position: absolute;
            right: 0;
            left: 0;
            bottom: 0;
        }
    }



`

const StyledLink = styled.a<{ $textColor?: string;}>`
    font: 400 18px / 1.44444 "DM Sans", sans-serif;
    color: ${props=>props.$textColor|| `${theme.colors.lightContentTextPrimary}`};
    position: relative;
    
    &:hover{
        color: ${theme.colors.lightHeadersColor};
        font: 600 18px / 1.44444 "DM Sans", sans-serif;
    }
`

