import {Icon} from "../icons/Icon.tsx";
import styled from "styled-components";

type LogoPropsType = {
    logoId: string
    linkHref?: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
    color?: string          // Основной цвет
    hoverColor?: string     // Цвет при наведении
    hover?: boolean
    hoverScale?: boolean
}

export const Logo = (props: LogoPropsType) => {
    return (
        <LogoLink href={props.linkHref || "#"}
                  $hoverColor={props.hoverColor || "#2a7ae9"}>
            <Icon iconId={props.logoId}
                  width={props.width}
                  height={props.height}
                  viewBox={props.viewBox}
                  fill={props.fill}
                  color={props.color || "#666666"}
                  hoverColor={props.hoverColor || "#2a7ae9"}
                  hover={props.hover || false}
                  hoverScale={props.hoverScale || false}
            />
        </LogoLink>
    );
};

const LogoLink = styled.a<{ $hoverColor: string }>`
    
`

