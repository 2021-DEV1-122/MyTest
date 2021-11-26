import * as ReactRouter from 'react-router';
import {shallow} from "enzyme";
import Game from "./Game";


jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: "localhost:3000/game",
        state: {player1: 'player1', player2: 'player2'}
    })
}));
describe("<Game />", () => {
    it("should render Game with data coming from Home", () => {
        const wrapper = shallow(<Game/>);
        const h1 = wrapper.find("h1");
        expect(h1.at(0).text()).toBe("player1 : X")
        expect(h1.at(1).text()).toBe("player2 : O")

    });

    it('should render two div with className "col-md-6" inside div with className "row" ', () => {
        const wrapper = shallow(<Game/>);
        const div = wrapper.find("div");
        expect(div.at(0).prop("className")).toBe("container")
        expect(div.at(1).prop("className")).toBe("row")
        expect(div.at(2).prop("className")).toBe("col-md-6")
        expect(div.at(3).prop("className")).toBe("col-md-6")
    });
});
