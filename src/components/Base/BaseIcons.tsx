import { FunctionComponent, ReactNode, SVGProps, createElement } from "react";

export interface CompProps{
    element: any
}

export default function BaseIcon({ element }: CompProps){
    return createElement(
        element
    )
}