import React, { useState as useStateMock } from 'react';
import {shallow} from 'enzyme';

import InputText from "./InputText";
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));


describe('InputText', () => {
    let wrapper;
    const setState = jest.fn();


    beforeEach(() => {
        useStateMock.mockImplementation(init => [init, setState]);
        wrapper = shallow(<InputText/>)
    });

    afterEach(() => {
        jest.clearAllMocks();
    });


    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    describe("input Text", () => {
        it("Should capture input value correctly onChange", () => {
            const inputValue = wrapper.find("input").at(0);
            inputValue.simulate('change', {
                target: {
                    value: 'Test'
                }
            });
            expect(setState).toHaveBeenCalledWith("Test");
        });
    });

});
