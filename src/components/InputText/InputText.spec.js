import React from 'react';
import { shallow } from 'enzyme';
import InputText from "./InputText";

describe('InputText', () => {
    let container;

    beforeEach(() => (container = shallow(<InputText />)));

    it('should render a <div />', () => {
        expect(container.find('div').length).toEqual(1);
    });

});
