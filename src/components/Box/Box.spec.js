import React, {useState as useStateMock} from 'react';
import {shallow} from 'enzyme';
import Box from "./Box";


jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));
const props = {
    id: '',
    value: ''
};

describe('<Box {...props} id="id1" value="X" />', () => {
    let wrapper;
    const setState = jest.fn();
    let button;

    beforeEach(() => {
        useStateMock.mockImplementation(init => [init, setState]);
        wrapper = shallow(<Box {...props} id="id1" value="X" />)
        button = wrapper.find("button").at(0);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });


    it('renders a Box with id of "id1" and Value of "X"', () => {
        expect(button.prop('id')).toBe('id1');
        expect(button.text()).toBe('X');
    });

});
