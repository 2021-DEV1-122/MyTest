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

        expect(wrapper.find("h1").at(0).text()).toBe("player1")
        expect(wrapper.find("h1").at(1).text()).toBe("player2")

    });
});
