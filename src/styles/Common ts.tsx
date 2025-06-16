import {theme} from "./Theme.tsx";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    FMin?: number
    FMax?: number
    spacing?: string

}

export const font = ({family, weight, color, lineHeight, FMax, FMin,spacing}: FontPropsType) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.lightContentTextPrimary};
    line-height: ${lineHeight || 1.2};
    letter-spacing: ${spacing||"-0.02em"};
    
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${FMax} - ${FMin}) + ${FMin}px);
`
