import React from "react";
import { render } from "@testing-library/react";
import FButton from "./FButton";


describe("FButton", () => {
    test("renders the Button component", () => {
        render(<FButton />);
    });
});