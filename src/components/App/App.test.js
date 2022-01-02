import { render, cleanup, screen, fireEvent, act } from '@testing-library/react';

import axios from 'axios';
import App from './App';
jest.mock('axios')



describe('App component', () => {

  
  afterEach(cleanup);
  
  test('it renders the main header as expected', async () => {

      axios.get.mockResolvedValueOnce({data: []});

      await act( async () => {        
        await render(<App />);
      })
      
      const header = screen.getByTestId('main-header');
      expect(header.innerHTML).toBe('Hello World');
  });


  test('it updates the secondary header while typing on input', async () => {
    
    const inputText = 'inputtext';
    
    axios.get.mockResolvedValue({
      data: []
    });
    
    await act(async () => {      
      render(<App />);        
    })

    const input = screen.getByTestId('main-input');            
      
    await act(async () => {    
      const mockEvent = {target: {value: inputText}};  
      await fireEvent.change(input, mockEvent);        
    })

    const header2 = screen.getByTestId('secondary-header');
    expect(header2.innerHTML).toBe(inputText);
  });


  test('it renders the post list as expected when API response is successful', async () => {
    axios.get.mockResolvedValueOnce({
      data: [
        { id: 1, title: 'post one' },
        { id: 2, title: 'post two' },
        { id: 3, title: 'post three' },
      ],
    });

    await act( async () => {        
      await render(<App />);
    });

    const posts = screen.getAllByTestId('post');
    
    expect(posts.length).toBe(3);
    expect(posts[0].innerHTML).toBe('&gt;&gt; post one');
    expect(posts[1].innerHTML).toBe('&gt;&gt; post two');
    expect(posts[2].innerHTML).toBe('&gt;&gt; post three');
  })
})