// const { extend } = require("lodash");
// const { render } = require("react-dom");

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }

    }
    render() {
        return (

            (this.state.counter === 0) ?
                <div>
                    <button onClick={() => this.setState({ counter: 1 })}> checkout </button>
                </div >
                : (this.state.counter === 1) ?
                    <div>
                        <p>First page</p>
                        <button onClick={() => this.setState({ counter: 2 })}> checkout </button>
                        <div>
                            <input type="names" className="input-element" id="1" placeholder="names" /> <br />
                            <input type="email" className="input-element" id="2" placeholder="email" /> <br />
                            <input type="passowrd" className="input-element" id="3" placeholder="passowrd" /> <br />
                            <input type="account creation" className="input-element" id="4" placeholder="acount creation" /> <br />
                        </div>
                    </div>
                    : (this.state.counter === 2) ?
                        <div>
                            <p>Collects ships</p>
                            <button onClick={() => this.setState({ counter: 2 })}> checkout </button>
                            <div>
                                <input type="address" className="input-element" id="4" placeholder="address" /> <br />
                                <input type="city state" className="input-element" id="5" placeholder="city state" /> <br />
                                <input type="Zip code" className="input-element" id="6" placeholder="Zip code" /> <br />
                            </div>
                        </div>
                        : (this.state.counter === 3) ?
                            <div>
                                <p>payment</p>
                                <button onClick={() => this.setState({ counter: 2 })}> checkout </button>
                                <div>
                                    <input type="credit card #" className="input-element" id="7" placeholder="credit card" /> <br />
                                    <input type=" expiry date" className="input-element" id="8" placeholder=" expiry date" /> <br />
                                    <input type="CVV" className="input-element" id="9" placeholder="CVV" /> <br />
                                    <input type="billing zip code." className="input-element" id="10" placeholder="billing zip code." /> <br />
                                </div>
                            </div>
                            :
                            <div> </div>

   
        )

    }
}

ReactDOM.render(<App />, document.getElementById('app'))