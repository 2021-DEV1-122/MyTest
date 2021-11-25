import React, {useState as useStateMock} from 'react';
import {shallow} from 'enzyme';

import InputText from "./InputText";

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));
const props = {
    id: '',
    placeholder: '',
    title: ''
};

describe('<InputText id="id1" placeholder="Enter your userName" title="User One" />', () => {
    let wrapper;
    const setState = jest.fn();
    let inputValue;

    beforeEach(() => {
        useStateMock.mockImplementation(init => [init, setState]);
        wrapper = shallow(<InputText {...props} id="id1" placeholder="Enter your userName" title="User One"/>)
        inputValue = wrapper.find("input").at(0);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it("Should capture input value correctly onChange", () => {

        inputValue.simulate('change', {
            target: {
                value: 'Test'
            }
        });
        expect(setState).toHaveBeenCalledWith("Test");
    });

    it('renders a Input with id of "id1" and placeholder message of "Enter your userName" and  title message of "User One"', () => {
        const label = wrapper.find("label").at(0);
        expect(inputValue.prop('id')).toBe('id1');
        expect(inputValue.prop("placeholder")).toBe('Enter your userName');
        expect(label.text()).toBe('User One');
    });

});
