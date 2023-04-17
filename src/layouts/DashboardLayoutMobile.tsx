import React from "react";

export interface CompProps{
    children: string;
}

export default function DashboardLayoutFull({ children }: CompProps){
    
    return (
        <div>
            { children }
        </div>
    )
}