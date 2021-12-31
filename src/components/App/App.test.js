// import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import App from './App';

describe('App component', () => {

 test('it renders the main header as expected', () => {
   const appComponent = render(<App />);
   const header = appComponent.getByTestId('main-header');
   expect(header.innerHTML).toBe('Hello World');
 });

  test('it updates the secondary header when typing on input', async () => {
    await act(async () => {
      const appComponent = render(<App />);
      const header2 = appComponent.getByTestId('secondary-header');
      const input = appComponent.getByTestId('main-input');
      const inputText = 'inputtext';
      const mockEvent = {target: {value: inputText}}; // evt.target.value
      
      await fireEvent.change(input, mockEvent);


      expect(header2.innerHTML).toBe(inputText);
      
    })
  });
 
 
 
  // test('it renders the main header as expected', () => {
  //   const appComponent = render(<App />);

  //   const header = appComponent.getByTestId('main-header');
  //   const header2 = appComponent.getByTestId('secondary-header');
  //   const input = appComponent.getByTestId('main-input');
  //   const post = appComponent.getAllByTestId('post');

  //   expect(header.innerHTML).toBe('Hello World');
  // });


})