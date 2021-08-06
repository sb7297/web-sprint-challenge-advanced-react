import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  
  const firstName = screen.getByLabelText("First Name:");
  const lastName = screen.getByLabelText("Last Name:");
  const address = screen.getByLabelText("Address:");
  const city = screen.getByLabelText("City:");
  const state = screen.getByLabelText("State:");
  const zip = screen.getByLabelText("Zip:");
  const checkout = screen.getByText("Checkout"); 
  
  userEvent.type(firstName, "Taylor");
  userEvent.type(lastName, "Hebert");
  userEvent.type(address, "137 Alleghany Road");
  userEvent.type(city, "Brockton Bay");
  userEvent.type(state, "Massachusetts");
  userEvent.type(zip, "301978");
  userEvent.click(checkout);
  
  screen.getByText(/Woo-hoo!/);
  screen.getByText(/Taylor Hebert/);
  // screen.getByText(/Daniel Hebert/);
  screen.getByText("137 Alleghany Road");
  screen.getByText(/Brockton Bay, Massachusetts 301978/);
});
