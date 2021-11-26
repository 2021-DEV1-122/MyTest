import React from 'react';
import InputText from "../../components/InputText/InputText";
import {Link} from "react-router-dom";

const Home = () => {
    // your link creation


    return (
        <div class="col-md-4 col-md-offset-4">
            <form>
                <InputText id="userName1" placeholder="Enter your userName" title="Player One"></InputText>
                <InputText id="userName2" placeholder="Enter your userName" title="Player Two"></InputText>
                <Link to='/game'  state={{ player1: 'occupation' ,player2: '5555' }}  class="btn btn-info" role="button"> te</Link>
            </form>
        </div>
    );

}

export default Home;
