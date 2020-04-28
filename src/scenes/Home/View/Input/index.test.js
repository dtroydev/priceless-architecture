import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "scenes/Home/View/Input";

const handleInput = jest.fn((e) => e.preventDefault());

it("Should have 1 form with 1 select, 1 input and 1 button in it", () => {
  const { container } = render(
    <Input handleInput={handleInput} loading={false} />
  );

  expect(container.querySelectorAll("form")).toHaveLength(1);
  expect(container.querySelectorAll("form input")).toHaveLength(1);
  expect(container.querySelectorAll("form select")).toHaveLength(1);
  expect(container.querySelectorAll("form button")).toHaveLength(1);
});

it("Should call handleInput when button is clicked", () => {
  const { container } = render(
    <Input handleInput={handleInput} loading={false} />
  );

  expect(handleInput).toHaveBeenCalledTimes(0);
  fireEvent.click(container.querySelector("button"));
  expect(handleInput).toHaveBeenCalledTimes(1);
});

it("Should disable button when loading is set to true", () => {
  const { container } = render(
    <Input handleInput={handleInput} loading={true} />
  );

  expect(container.querySelector("button").disabled).toBeTruthy();
});
