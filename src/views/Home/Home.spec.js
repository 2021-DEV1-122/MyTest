import React, {useState as useStateMock} from 'react';
import {shallow} from 'enzyme';
import Home from "./Home";

describe('<Home>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Home/>)
    });

    it('should render a Two input with button submit', () => {
        expect(wrapper.find('InputText').length).toEqual(2);
        expect(wrapper.find('Link').length).toEqual(1);
    });


});
