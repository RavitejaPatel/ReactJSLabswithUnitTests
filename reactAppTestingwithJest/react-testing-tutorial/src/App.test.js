import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
//import renderer from 'react-test-renderer';
import Counter from './Counter';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});




// render the component 
//Select the elements
//Interact with those elements
//Assert that the results are as expected.

//test block
test("increments counter", () => {
  // render the component on virtual dom
  render(<Counter />);

  //select the elements you want to interact with
  const counter = screen.getByTestId("counter");
  const incrementBtn = screen.getByTestId("increment");

  //interact with those elements
  fireEvent.click(incrementBtn);

  //assert the expected result
  expect(counter).toHaveTextContent("1");
});


//test block
test("Decrement counter", () => {
  // render the component on virtual dom
  render(<Counter />);

  //select the elements you want to interact with
  const counter = screen.getByTestId("counter");
  const decrementBtn = screen.getByTestId("decrement");

  //interact with those elements
  fireEvent.click(decrementBtn);

  //assert the expected result
  expect(counter).toHaveTextContent("-1");
});
