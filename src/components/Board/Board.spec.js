import React, {useState as useStateMock} from 'react';
import {shallow} from 'enzyme';
import Board from "./Board";
import Box from "../Box/Box";


jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));
const props = {
    value: ''
};
const setState = jest.fn();
const value = Array(9).fill("")
describe('<Board {...props}  value={Array(9).fill("")} />', () => {
    let wrapper;

    let box;

    beforeEach(() => {
        useStateMock.mockImplementation(init => [init, setState]);
        wrapper = shallow(<Board {...props} value={value}/>)
        box = wrapper.find("Box");
    });

    afterEach(() => {
        jest.clearAllMocks();
    });


    it('renders 9 box', () => {
        expect((box).length).toEqual(9);
    });

});

describe('mounted Box', () => {
    let container;


    function MySpy() {
        this.pos = 0;
    }

    MySpy.prototype.fn = function () {
        return () => this.pos++;
    }
    const mySpy = new MySpy();
    const mockClickComponent = mySpy.fn();
    beforeEach(() => {
        useStateMock.mockImplementation(init => [init, setState]);
        container = shallow(<Box id={mySpy.pos} key={mySpy.pos} onClick={mockClickComponent()}
                                 value={value[mySpy.pos]}/>)
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should change positon clicked when the box is clicked', () => {
        container.find('button').at(0).simulate('click');
        expect(mySpy.pos).toEqual(1);
    });
})
