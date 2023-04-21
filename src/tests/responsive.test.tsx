import React from "react"
import { screen, render, fireEvent } from "@testing-library/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import { Theme, useMediaQuery } from "@mui/material"

test("Responsive Design", () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Login />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
    
    const wrapper = screen.getByRole("wrapper")

    expect(screen.getByAltText("Login Image")).toBeInTheDocument()
 
})