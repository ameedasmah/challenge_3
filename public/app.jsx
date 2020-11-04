// const { extend } = require("lodash");
// const { render } = require("react-dom");

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            
            //     {
            //         Name: '',
            //         Email: '',
            //         Password: '',
            //         LineOne: '',
            //         LineTwo: '',
            //         City: '',
            //         State: '', 
            //         Zipcode: '',
            //         CreditCardNumber: '',
            //         ExpirationDate: '', 
            //         CVV: '', 
            //         BillingZipcode: ''

            // }
        }

    }


    tochange(event){
        const {name,value} = event.target;

        this.setState({[name] : value})
        
    }


    render() {
        return (

            (this.state.counter === 0) ?
                <div>
                    <button onClick={() => this.setState({ counter: 1 })}> checkout </button>
                </div >
                : (this.state.counter === 1) ?
                    <div>
                        <p >First page</p>
                        <button id="login-box" onClick={() => this.setState({ counter: 2 })}> checkout </button>
                        <div>
                            <input type="names"  id="1" placeholder="names" /> <br />
                            <input type="email"  id="2" placeholder="email" /> <br />
                            <input type="passowrd"  id="3" value = {this.state.name} placeholder="passowrd" onChange={this.tochange.bind(this)} /> <br />
                            <button onClick={()=>this.setState({counter:2})} type="reset">next</button> <br />
                        </div>
                    </div>
                    : (this.state.counter === 2) ?
                        <div>
                            <p>Collects ships</p>
                            <button id="login-box" onClick={() => this.setState({ counter: 3 })}> checkout </button>
                            <div>
                                <input type="line-one" value = {this.state.name} id="10" placeholder="line-one" onChange={this.tochange.bind(this)}/> <br />
                                <input type="line-two"  id="11" placeholder="line-two"  /> <br />
                                <input type="city"  id="4" placeholder="city" /> <br />
                                <input type="state"  id="5" placeholder="state" /> <br />
                                <input type="Zip code"  id="6" placeholder="Zip code" /> <br />
                                <button onClick={()=>this.setState({counter:3})} type="reset">next</button> <br />
                            </div>
                        </div>
                        : (this.state.counter === 3) ?
                            <div>
                                <p>payment</p>
                                <button id="login-box" onClick={() => this.setState({ counter: 4 })}> checkout </button>
                                <div>
                                    <input type="credit card #"  id="7" placeholder="credit card" /> <br />
                                    <input type=" expiry date"  id="8" placeholder=" expiry date" /> <br />
                                    <input type="CVV"  id="9" placeholder="CVV" /> <br />
                                    <input type="billing zip code."  id="10" placeholder="billing zip code." /> <br />
                                    <button onClick={()=>this.setState({counter:4})} type="reset">Buy</button> <br />
                                </div>
                            </div>
                            :
                            <div> </div>

   
        )

    }
}

ReactDOM.render(<App />, document.getElementById('app'))