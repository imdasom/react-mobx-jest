// react
import React from 'react';
import { Provider } from 'mobx-react';
// test
import { render, waitForElement, fireEvent } from '@testing-library/react';
// component
import HomePage from '@/pages/HomePage';

function renderWithStore() {
    return render(
        <Provider>
            <HomePage />
        </Provider>
    );
}

describe('<HomePage />', () => {
    test('render', () => {
        // given
        const utils = renderWithStore();
        // when
        // then
        expect(utils.getByText('HomePage')).toBeTruthy();
    });
});