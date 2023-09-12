/* eslint-disable node/no-unpublished-import */
import React from 'react';
import {render, cleanup, screen, fireEvent} from '@testing-library/react';
// eslint-disable-next-line node/no-extraneous-import
import Root from './root.component';

describe('React App Tests', () => {
  // To render the React App before each test
  beforeEach(() => {
    render(<Root />);
  });

  // To unmounts React trees that were mounted with render after each test
  afterEach(() => {
    cleanup;
  });

  it('TEST 1 - Check the presence of the "+" and "-" buttons', () => {
    expect(screen.getByTestId('buttonPlus_mainReactApp')).toBeTruthy();
    expect(screen.getByTestId('buttonMinus_mainReactApp')).toBeTruthy();
  });

  it('TEST 2 - Check the correct behavior of the React image on the click of the correct button', () => {
    const button = screen.getByTestId('button_mainReactApp');
    expect(button).toBeTruthy();
    fireEvent.click(button);
    expect(screen.getByTestId('img_mainReactApp')).toBeTruthy();
  });
});
