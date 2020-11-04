// const { extend } = require("lodash");
// const { render } = require("react-dom");

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,


            Name: '',
            Email: '',
            Password: '',
            LineOne: '',
            LineTwo: '',
            City: '',
            State: '',
            Zipcode: '',
            CreditCardNumber: '',
            ExpirationDate: '',
            CVV: '',
            BillingZipcode: ''

            // 
        }

    }


    tochange(event) {
        const { name, value } = event.target;

        this.setState({ [name]: value }) // this.setState({ Name : jewqkljewqlk})
        console.log(event.target.value)

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
                        {/* <button id="login-box" onClick={() => this.setState({ counter: 2 })}> checkout </button> */}
                        <form>
                            <input type="names" value={this.state.Name} name="Name" onChange={this.tochange.bind(this)} placeholder="names" /> <br />
                            <input type="email" id="2" value={this.state.email} placeholder="email" name="Email" onChange={this.tochange.bind(this)} /> <br />
                            <input type="passowrd" id="3" value={this.state.passowrd} placeholder="passowrd"  name="Password" onChange={this.tochange.bind(this)} /> <br />
                        </form>
                            <button id="4" onClick={() => this.setState({ counter: 2 })} type="reset" >next</button> <br />
                    </div>
                    : (this.state.counter === 2) ?
                        <div>
                            <p>Collects ships</p>

                            <form>
                                <input type="text"  value={this.state.LineOne} name="LineOne" id="5" placeholder="LineOne" onChange={this.tochange.bind(this)} /> <br />
                                <input type="text" id="6"  placeholder="line-two" value={this.state.LineTwo} name="LineTwo"   onChange={this.tochange.bind(this)} /> <br />
                                <input type="text" id="7" placeholder="City" value={this.state.City} name="City"  onChange={this.tochange.bind(this)} /> <br />
                                <input type="text" id="8" placeholder="State"  value={this.state.State} name="State" onChange={this.tochange.bind(this)} /> <br />
                                <input type="text" id="9" placeholder="Zipcode"  value={this.state.Zipcode} name="Zipcode"  onChange={this.tochange.bind(this)} /> <br />
                            </form>
                                <button onClick={() => this.setState({ counter: 3 })} id="10" type="reset">next</button> <br />
                        </div>
                        : (this.state.counter === 3) ?
                            <div>
                                <p>payment</p>
                                <form>
                                    <input type="text" id="11" placeholder="credit card"  value={this.state.CreditCardNumber} name="CreditCardNumber" onChange={this.tochange.bind(this)} /> <br />
                                    <input type=" text" id="12"  value={this.state.ExpirationDate} placeholder=" expiry date" name="ExpirationDate" onChange={this.tochange.bind(this)} /> <br />
                                    <input type="text" id="13" placeholder="CVV"  value={this.state.CVV} name="CVV" onChange={this.tochange.bind(this)}/> <br />
                                    <input type="text" id="14"  value={this.state.BillingZipcode} placeholder="billing zip code." name="BillingZipcode" onChange={this.tochange.bind(this)} /> <br />
                                </form>
                                    <button id="15" onClick={() => this.setState({ counter: 4 })} type="reset">Buy</button> <br />
                            </div>
                            :
                            <div> </div>


        )

    }
}

ReactDOM.render(<App />, document.getElementById('app'))