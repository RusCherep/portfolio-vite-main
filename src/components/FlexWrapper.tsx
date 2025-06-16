import styled from "styled-components";

type FlexWrapperPropsType = {
    display?: string
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    padding?:string
    flexGrow?: number
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display:${props=>props.display|| "flex"} ;
    flex-direction: ${props=>props.direction|| "row"};
    justify-content: ${props=>props.justify|| "flex-start"};
    align-items: ${props=>props.align|| "stretch"};
    flex-wrap: ${props=>props.wrap||"nowrap"};
    padding: ${props=>props.padding||"0"};
    flex-grow: ${props=>props.flexGrow||"nome"};
    height:100%;
`