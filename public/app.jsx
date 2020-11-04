// const { extend } = require("lodash");
// const { render } = require("react-dom");

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }

    }
    render(){
        return (  
            <button>checkout</button>  )
    }
}
ReactDOM.render(<App/>,Document.getElementById('app'))