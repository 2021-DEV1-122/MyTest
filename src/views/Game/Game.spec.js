import {mount, shallow} from "enzyme";
import Game from "./Game";
import React, {useState as useStateMock} from "react";
import Board from "../../components/Board/Board";

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: "localhost:3000/game",
        state: {player1: 'player1', player2: 'player2'}
    })
}));
const setState = jest.fn();
describe("<Game />", () => {
    let wrapper;

    beforeEach(() => {
        useStateMock.mockImplementation(init => [init, setState]);
        wrapper = shallow(<Game/>);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });


    it("should render Game with data coming from Home", () => {

        const h1 = wrapper.find("h1");
        expect(h1.at(0).text()).toBe("player1 : X")
        expect(h1.at(1).text()).toBe("player2 : O")

    });

    it('should render two div with className "col-md-6" inside div with className "row" ', () => {

        const div = wrapper.find("div");
        expect(div.at(0).prop("className")).toBe("container")
        expect(div.at(1).prop("className")).toBe("row")
        expect(div.at(2).prop("className")).toBe("col-md-6")
        expect(div.at(3).prop("className")).toBe("col-md-6")
    });

    it('should render Board component ', () => {
        const border = wrapper.find("Board");
        expect(border.at(0).length).toEqual(1);
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
        container = shallow(<Board onClick={mockClickComponent} value={Array(9).fill("")}/>)
    });
    it('should change positon clicked when the box is clicked', () => {
        container.find('Box').at(0).simulate('click');

        expect(mySpy.pos).toEqual(1);
    });
})


