import React, {useState as useStateMock} from 'react';
import {shallow} from 'enzyme';
import Board from "./Board";


jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));
const props = {
    value: ''
};

describe('<Board {...props}  value={Array(9).fill("")} />', () => {
    let wrapper;
    const setState = jest.fn();
    let box;

    beforeEach(() => {
        useStateMock.mockImplementation(init => [init, setState]);
        wrapper = shallow(<Board {...props} value={Array(9).fill("")}/>)
        box = wrapper.find("Box");
    });

    afterEach(() => {
        jest.clearAllMocks();
    });


    it('renders 9 box', () => {
        expect((box).length).toEqual(9);
    });

});
