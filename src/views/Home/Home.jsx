import React, {useState} from 'react';
import InputText from "../../components/InputText/InputText";
import {Link} from "react-router-dom";

const Home = () => {
    const [userName1, setUserName1] = useState();
    const [userName2, setUserName2] = useState();


    return (
        <div class="col-md-4 col-md-offset-4">
            <form>
                <InputText id="userName1" value={(data) => setUserName1(data)} placeholder="Enter your userName"
                           title="Player One"></InputText>
                <InputText id="userName2" value={(data) => setUserName2(data)} placeholder="Enter your userName"
                           title="Player Two"></InputText>
                <Link to='/game' state={{player1: userName1, player2: userName2}} class="btn btn-info"
                      role="button"> Start the Game</Link>
            </form>
        </div>
    );

}

export default Home;
