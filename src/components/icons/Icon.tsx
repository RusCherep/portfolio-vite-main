import Vector from '../../assets/images/Vector.svg'
import styled, {css} from "styled-components";

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
    color?: string
    hoverColor?: string
    hover?: boolean
    hoverScale?: boolean


}

export const Icon = (props: IconPropsType) => {
    return (
        <StyledIcon width={props.width || "30px"}
                    height={props.height || "30px"}
                    viewBox={props.viewBox || "0 0 30 30"}
                    fill={props.fill || "none"}
                    $color={props.color || "#666666"}
                    $hoverColor={props.hoverColor || "#2a7ae9"}
                    $hover={props.hover || false}
                    $hoverScale={props.hoverScale || false}
                    xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${Vector}#${props.iconId}`}/>
        </StyledIcon>
    );
};


const StyledIcon = styled.svg<{
    $color: string;
    $hoverColor: string;
    $hover: boolean;
    $hoverScale: boolean;
}>`
    margin: 10px;

    color: ${props => props.$color};
    transition: color 0.3s ease;

    ${props => props.$hover && css`
        &:hover {
            color: ${props.$hoverColor};

            ${props.$hoverScale && css`
                transform: scale(1.2);
                transition: all 0.3s ease;
            
            `}
            
        }
    `}
`
