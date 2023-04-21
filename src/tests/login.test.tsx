import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import Login from "../pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"

test("Login button", () => {
    render(
        <BrowserRouter>
            <Routes>   
                <Route path="*" element= {<Login />}/>
            </Routes>
        </BrowserRouter>
    )
    expect(screen.getByText("LOG IN")).toBeInTheDocument()

    fireEvent.click(screen.getByText('LOG IN'))

    
    // expect(screen.queryByText("Welcome!")).not.toBeInTheDocument()
})

test("Password Toggle Functionality", () => {
    render (
        <BrowserRouter>
            <Routes>   
                <Route path="*" element= {<Login />}/>
            </Routes>
        </BrowserRouter>
    )

    const passwordToggle = screen.getByRole("showToggle")
    const passwordInput = screen.getByRole("password");

    expect(passwordToggle).toBeInTheDocument()
    expect(passwordToggle.innerHTML).toBe("Show")
    expect(passwordInput.getAttribute("type")).toEqual("password");

    fireEvent.click(passwordToggle)

    expect(passwordToggle.innerHTML).toBe("Hide")
    expect(passwordInput.getAttribute("type")).toEqual("text");
})