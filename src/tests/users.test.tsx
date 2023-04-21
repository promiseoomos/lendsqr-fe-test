import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Users from "../pages/Users"


test("User Table Data", () => {

    render(<Users />)

    const tableData = screen.getByRole("table-data");

    expect(tableData.children.length).toBeGreaterThan(0);
})