import React from 'react';
import InputText from "../../components/InputText/InputText";

const Home = () => {


    return (
        <div class="col-md-4 col-md-offset-4">
            <form>
                <InputText id="userName1" placeholder="Enter your userName" title="Player One"></InputText>
                <InputText id="userName2" placeholder="Enter your userName" title="Player Two"></InputText>
                <button type="submit" className="btn btn-primary">Enter to the Game</button>
            </form>
        </div>
    );

}

export default Home;
