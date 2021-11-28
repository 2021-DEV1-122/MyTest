import React, {useState as useStateMock} from 'react';
import {shallow,mount} from 'enzyme';
import Board from "./Board";
import Box from "../Box/Box";


jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));
const props = {
    value: '',
    onClick :jest.fn()
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

function MySpy() {
    this.pos = 0;
}

MySpy.prototype.fn = function () {
    return () => this.pos++;
}
const mySpy = new MySpy();
const mockClickComponent = mySpy.fn();


function SpyArray() {
    this.value = ["", ""];
}

SpyArray.prototype.fn = function () {
    return () => {
        value[0] = "X";
        return value[0] ;
    };
}
const spyArray = new SpyArray();
const mockArrayPos = spyArray.fn();

describe('mounted Box', () => {
    let container;


    beforeEach(() => {
        useStateMock.mockImplementation(init => [init, setState]);

    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should change positon when the box is clicked', () => {
        container = shallow(<Box id={mySpy.pos} key={mySpy.pos} onClick={jest.fn()}
                                 value={value[mySpy.pos]}/>)

        container.find('button').at(0).simulate('click');
        expect(mySpy.pos).toEqual(0);
    });

    it('should set X in box after clicked it', () => {
        container =  shallow(<Box id="0" key="0" onClick={jest.fn()}
                                 value={spyArray.value[0]}/>)
        container.find('button').at(0).simulate('click', {target: {value: ""}});
        expect(container.find('button').at(0).text()).toEqual("");
    });
})
