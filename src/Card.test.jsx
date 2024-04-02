import { it, expect } from "vitest";

import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {
    render(
        <Card
            caption="Test caption"
            src="testSrc"
            currNum={1}
            totalNum={2}
        />
    );
});

it("matches snapshot", function () {
    const { container, debug } = render(
        <Card
            caption="Test caption"
            src="testSrc"
            currNum={1}
            totalNum={2}
        />
    );

    debug(container);
    expect(container).toMatchSnapshot();
});