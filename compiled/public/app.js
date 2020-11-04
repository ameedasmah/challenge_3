// const { extend } = require("lodash");
// const { render } = require("react-dom");

class App extends React.Component {
    constructor(props) {
        super(props);
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
        };
    }

    tochange(event) {
        const { name, value } = event.target;

        this.setState({ [name]: value }); // this.setState({ Name : jewqkljewqlk})
        console.log(event.target.value);
    }

    render() {
        return this.state.counter === 0 ? React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                { onClick: () => this.setState({ counter: 1 }) },
                ' checkout '
            )
        ) : this.state.counter === 1 ? React.createElement(
            'div',
            { id: 'zameeel' },
            React.createElement(
                'p',
                null,
                'First page'
            ),
            React.createElement(
                'form',
                null,
                React.createElement('input', { type: 'names', value: this.state.Name, name: 'Name', onChange: this.tochange.bind(this), placeholder: 'names' }),
                ' ',
                React.createElement('br', null),
                React.createElement('input', { type: 'email', id: '2', value: this.state.email, placeholder: 'email', name: 'Email', onChange: this.tochange.bind(this) }),
                ' ',
                React.createElement('br', null),
                React.createElement('input', { type: 'password', id: '3', value: this.state.passowrd, placeholder: 'passowrd', name: 'Password', onChange: this.tochange.bind(this) }),
                ' ',
                React.createElement('br', null)
            ),
            React.createElement(
                'button',
                { id: '4', onClick: () => this.setState({ counter: 2 }), type: 'reset' },
                'next'
            ),
            ' ',
            React.createElement('br', null)
        ) : this.state.counter === 2 ? React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Collects ships'
            ),
            React.createElement(
                'form',
                null,
                React.createElement('input', { type: 'text', value: this.state.LineOne, name: 'LineOne', id: '5', placeholder: 'LineOne', onChange: this.tochange.bind(this) }),
                ' ',
                React.createElement('br', null),
                React.createElement('input', { type: 'text', id: '6', placeholder: 'line-two', value: this.state.LineTwo, name: 'LineTwo', onChange: this.tochange.bind(this) }),
                ' ',
                React.createElement('br', null),
                React.createElement('input', { type: 'text', id: '7', placeholder: 'City', value: this.state.City, name: 'City', onChange: this.tochange.bind(this) }),
                ' ',
                React.createElement('br', null),
                React.createElement('input', { type: 'text', id: '8', placeholder: 'State', value: this.state.State, name: 'State', onChange: this.tochange.bind(this) }),
                ' ',
                React.createElement('br', null),
                React.createElement('input', { type: 'text', id: '9', placeholder: 'Zipcode', value: this.state.Zipcode, name: 'Zipcode', onChange: this.tochange.bind(this) }),
                ' ',
                React.createElement('br', null)
            ),
            React.createElement(
                'button',
                { onClick: () => this.setState({ counter: 3 }), id: '10', type: 'reset' },
                'next'
            ),
            ' ',
            React.createElement('br', null)
        ) : this.state.counter === 3 ? React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'payment'
            ),
            React.createElement(
                'form',
                null,
                React.createElement('input', { type: 'text', id: '11', placeholder: 'credit card', value: this.state.CreditCardNumber, name: 'CreditCardNumber', onChange: this.tochange.bind(this) }),
                ' ',
                React.createElement('br', null),
                React.createElement('input', { type: ' text', id: '12', value: this.state.ExpirationDate, placeholder: ' expiry date', name: 'ExpirationDate', onChange: this.tochange.bind(this) }),
                ' ',
                React.createElement('br', null),
                React.createElement('input', { type: 'text', id: '13', placeholder: 'CVV', value: this.state.CVV, name: 'CVV', onChange: this.tochange.bind(this) }),
                ' ',
                React.createElement('br', null),
                React.createElement('input', { type: 'text', id: '14', value: this.state.BillingZipcode, placeholder: 'billing zip code.', name: 'BillingZipcode', onChange: this.tochange.bind(this) }),
                ' ',
                React.createElement('br', null)
            ),
            React.createElement(
                'button',
                { id: '15', onClick: () => {
                        this.setState({ counter: 0 });

                        // Simple POST request with a JSON body using fetch
                        const requestOptions = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(this.state)
                        };
                        fetch('/checkout', requestOptions).then(response => response.json()).then(data => this.setState({ postId: data.id }));
                    }, type: 'reset' },
                'Buy'
            ),
            ' ',
            React.createElement('br', null)
        ) : React.createElement(
            'div',
            null,
            ' '
        );
    }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3B1YmxpYy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY291bnRlciIsIk5hbWUiLCJFbWFpbCIsIlBhc3N3b3JkIiwiTGluZU9uZSIsIkxpbmVUd28iLCJDaXR5IiwiU3RhdGUiLCJaaXBjb2RlIiwiQ3JlZGl0Q2FyZE51bWJlciIsIkV4cGlyYXRpb25EYXRlIiwiQ1ZWIiwiQmlsbGluZ1ppcGNvZGUiLCJ0b2NoYW5nZSIsImV2ZW50IiwibmFtZSIsInZhbHVlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiYmluZCIsImVtYWlsIiwicGFzc293cmQiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJwb3N0SWQiLCJpZCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQSxNQUFNQSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUM5QkMsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1RDLHFCQUFTLENBREE7O0FBSVRDLGtCQUFNLEVBSkc7QUFLVEMsbUJBQU8sRUFMRTtBQU1UQyxzQkFBVSxFQU5EO0FBT1RDLHFCQUFTLEVBUEE7QUFRVEMscUJBQVMsRUFSQTtBQVNUQyxrQkFBTSxFQVRHO0FBVVRDLG1CQUFPLEVBVkU7QUFXVEMscUJBQVMsRUFYQTtBQVlUQyw4QkFBa0IsRUFaVDtBQWFUQyw0QkFBZ0IsRUFiUDtBQWNUQyxpQkFBSyxFQWRJO0FBZVRDLDRCQUFnQjs7QUFFaEI7QUFqQlMsU0FBYjtBQW9CSDs7QUFHREMsYUFBU0MsS0FBVCxFQUFnQjtBQUNaLGNBQU0sRUFBRUMsSUFBRixFQUFRQyxLQUFSLEtBQWtCRixNQUFNRyxNQUE5Qjs7QUFFQSxhQUFLQyxRQUFMLENBQWMsRUFBRSxDQUFDSCxJQUFELEdBQVFDLEtBQVYsRUFBZCxFQUhZLENBR3FCO0FBQ2pDRyxnQkFBUUMsR0FBUixDQUFZTixNQUFNRyxNQUFOLENBQWFELEtBQXpCO0FBRUg7O0FBR0RLLGFBQVM7QUFDTCxlQUVLLEtBQUt0QixLQUFMLENBQVdDLE9BQVgsS0FBdUIsQ0FBeEIsR0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsa0JBQVEsU0FBUyxNQUFNLEtBQUtrQixRQUFMLENBQWMsRUFBRWxCLFNBQVMsQ0FBWCxFQUFkLENBQXZCO0FBQUE7QUFBQTtBQURKLFNBREosR0FJTyxLQUFLRCxLQUFMLENBQVdDLE9BQVgsS0FBdUIsQ0FBeEIsR0FDRTtBQUFBO0FBQUEsY0FBSyxJQUFHLFNBQVI7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFHSTtBQUFBO0FBQUE7QUFDSSwrQ0FBTyxNQUFLLE9BQVosRUFBb0IsT0FBTyxLQUFLRCxLQUFMLENBQVdFLElBQXRDLEVBQTRDLE1BQUssTUFBakQsRUFBd0QsVUFBVSxLQUFLWSxRQUFMLENBQWNTLElBQWQsQ0FBbUIsSUFBbkIsQ0FBbEUsRUFBNEYsYUFBWSxPQUF4RyxHQURKO0FBQUE7QUFDdUgsK0NBRHZIO0FBRUksK0NBQU8sTUFBSyxPQUFaLEVBQW9CLElBQUcsR0FBdkIsRUFBMkIsT0FBTyxLQUFLdkIsS0FBTCxDQUFXd0IsS0FBN0MsRUFBb0QsYUFBWSxPQUFoRSxFQUF3RSxNQUFLLE9BQTdFLEVBQXFGLFVBQVUsS0FBS1YsUUFBTCxDQUFjUyxJQUFkLENBQW1CLElBQW5CLENBQS9GLEdBRko7QUFBQTtBQUVnSSwrQ0FGaEk7QUFHSSwrQ0FBTyxNQUFLLFVBQVosRUFBdUIsSUFBRyxHQUExQixFQUE4QixPQUFPLEtBQUt2QixLQUFMLENBQVd5QixRQUFoRCxFQUEwRCxhQUFZLFVBQXRFLEVBQWlGLE1BQUssVUFBdEYsRUFBaUcsVUFBVSxLQUFLWCxRQUFMLENBQWNTLElBQWQsQ0FBbUIsSUFBbkIsQ0FBM0csR0FISjtBQUFBO0FBRzRJO0FBSDVJLGFBSEo7QUFRSTtBQUFBO0FBQUEsa0JBQVEsSUFBRyxHQUFYLEVBQWUsU0FBUyxNQUFNLEtBQUtKLFFBQUwsQ0FBYyxFQUFFbEIsU0FBUyxDQUFYLEVBQWQsQ0FBOUIsRUFBNkQsTUFBSyxPQUFsRTtBQUFBO0FBQUEsYUFSSjtBQUFBO0FBUTZGO0FBUjdGLFNBREYsR0FXSyxLQUFLRCxLQUFMLENBQVdDLE9BQVgsS0FBdUIsQ0FBeEIsR0FDRTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFHSTtBQUFBO0FBQUE7QUFDSSwrQ0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLRCxLQUFMLENBQVdLLE9BQXJDLEVBQThDLE1BQUssU0FBbkQsRUFBNkQsSUFBRyxHQUFoRSxFQUFvRSxhQUFZLFNBQWhGLEVBQTBGLFVBQVUsS0FBS1MsUUFBTCxDQUFjUyxJQUFkLENBQW1CLElBQW5CLENBQXBHLEdBREo7QUFBQTtBQUNxSSwrQ0FEckk7QUFFSSwrQ0FBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxHQUF0QixFQUEwQixhQUFZLFVBQXRDLEVBQWlELE9BQU8sS0FBS3ZCLEtBQUwsQ0FBV00sT0FBbkUsRUFBNEUsTUFBSyxTQUFqRixFQUEyRixVQUFVLEtBQUtRLFFBQUwsQ0FBY1MsSUFBZCxDQUFtQixJQUFuQixDQUFyRyxHQUZKO0FBQUE7QUFFc0ksK0NBRnRJO0FBR0ksK0NBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsR0FBdEIsRUFBMEIsYUFBWSxNQUF0QyxFQUE2QyxPQUFPLEtBQUt2QixLQUFMLENBQVdPLElBQS9ELEVBQXFFLE1BQUssTUFBMUUsRUFBaUYsVUFBVSxLQUFLTyxRQUFMLENBQWNTLElBQWQsQ0FBbUIsSUFBbkIsQ0FBM0YsR0FISjtBQUFBO0FBRzRILCtDQUg1SDtBQUlJLCtDQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLEdBQXRCLEVBQTBCLGFBQVksT0FBdEMsRUFBOEMsT0FBTyxLQUFLdkIsS0FBTCxDQUFXUSxLQUFoRSxFQUF1RSxNQUFLLE9BQTVFLEVBQW9GLFVBQVUsS0FBS00sUUFBTCxDQUFjUyxJQUFkLENBQW1CLElBQW5CLENBQTlGLEdBSko7QUFBQTtBQUkrSCwrQ0FKL0g7QUFLSSwrQ0FBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxHQUF0QixFQUEwQixhQUFZLFNBQXRDLEVBQWdELE9BQU8sS0FBS3ZCLEtBQUwsQ0FBV1MsT0FBbEUsRUFBMkUsTUFBSyxTQUFoRixFQUEwRixVQUFVLEtBQUtLLFFBQUwsQ0FBY1MsSUFBZCxDQUFtQixJQUFuQixDQUFwRyxHQUxKO0FBQUE7QUFLcUk7QUFMckksYUFISjtBQVVJO0FBQUE7QUFBQSxrQkFBUSxTQUFTLE1BQU0sS0FBS0osUUFBTCxDQUFjLEVBQUVsQixTQUFTLENBQVgsRUFBZCxDQUF2QixFQUFzRCxJQUFHLElBQXpELEVBQThELE1BQUssT0FBbkU7QUFBQTtBQUFBLGFBVko7QUFBQTtBQVU2RjtBQVY3RixTQURGLEdBYUssS0FBS0QsS0FBTCxDQUFXQyxPQUFYLEtBQXVCLENBQXhCLEdBQ0U7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBRUk7QUFBQTtBQUFBO0FBQ0ksK0NBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsSUFBdEIsRUFBMkIsYUFBWSxhQUF2QyxFQUFxRCxPQUFPLEtBQUtELEtBQUwsQ0FBV1UsZ0JBQXZFLEVBQXlGLE1BQUssa0JBQTlGLEVBQWlILFVBQVUsS0FBS0ksUUFBTCxDQUFjUyxJQUFkLENBQW1CLElBQW5CLENBQTNILEdBREo7QUFBQTtBQUM0SiwrQ0FENUo7QUFFSSwrQ0FBTyxNQUFLLE9BQVosRUFBb0IsSUFBRyxJQUF2QixFQUE0QixPQUFPLEtBQUt2QixLQUFMLENBQVdXLGNBQTlDLEVBQThELGFBQVksY0FBMUUsRUFBeUYsTUFBSyxnQkFBOUYsRUFBK0csVUFBVSxLQUFLRyxRQUFMLENBQWNTLElBQWQsQ0FBbUIsSUFBbkIsQ0FBekgsR0FGSjtBQUFBO0FBRTBKLCtDQUYxSjtBQUdJLCtDQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLElBQXRCLEVBQTJCLGFBQVksS0FBdkMsRUFBNkMsT0FBTyxLQUFLdkIsS0FBTCxDQUFXWSxHQUEvRCxFQUFvRSxNQUFLLEtBQXpFLEVBQStFLFVBQVUsS0FBS0UsUUFBTCxDQUFjUyxJQUFkLENBQW1CLElBQW5CLENBQXpGLEdBSEo7QUFBQTtBQUcwSCwrQ0FIMUg7QUFJSSwrQ0FBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxJQUF0QixFQUEyQixPQUFPLEtBQUt2QixLQUFMLENBQVdhLGNBQTdDLEVBQTZELGFBQVksbUJBQXpFLEVBQTZGLE1BQUssZ0JBQWxHLEVBQW1ILFVBQVUsS0FBS0MsUUFBTCxDQUFjUyxJQUFkLENBQW1CLElBQW5CLENBQTdILEdBSko7QUFBQTtBQUk4SjtBQUo5SixhQUZKO0FBUUk7QUFBQTtBQUFBLGtCQUFRLElBQUcsSUFBWCxFQUFnQixTQUFTLE1BQU07QUFDM0IsNkJBQUtKLFFBQUwsQ0FBYyxFQUFFbEIsU0FBUyxDQUFYLEVBQWQ7O0FBRUk7QUFDQSw4QkFBTXlCLGlCQUFpQjtBQUNuQkMsb0NBQVEsTUFEVztBQUVuQkMscUNBQVMsRUFBRSxnQkFBZ0Isa0JBQWxCLEVBRlU7QUFHbkJDLGtDQUFNQyxLQUFLQyxTQUFMLENBQWUsS0FBSy9CLEtBQXBCO0FBSGEseUJBQXZCO0FBS0FnQyw4QkFBTSxXQUFOLEVBQW1CTixjQUFuQixFQUNLTyxJQURMLENBQ1VDLFlBQVlBLFNBQVNDLElBQVQsRUFEdEIsRUFFS0YsSUFGTCxDQUVVRyxRQUFRLEtBQUtqQixRQUFMLENBQWMsRUFBRWtCLFFBQVFELEtBQUtFLEVBQWYsRUFBZCxDQUZsQjtBQUlQLHFCQWJELEVBYUcsTUFBSyxPQWJSO0FBQUE7QUFBQSxhQVJKO0FBQUE7QUFxQmlDO0FBckJqQyxTQURGLEdBeUJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F2RHBCO0FBNERIO0FBaEc2Qjs7QUFtR2xDQyxTQUFTakIsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCa0IsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCB7IGV4dGVuZCB9ID0gcmVxdWlyZShcImxvZGFzaFwiKTtcclxuLy8gY29uc3QgeyByZW5kZXIgfSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb3VudGVyOiAwLFxyXG5cclxuXHJcbiAgICAgICAgICAgIE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBFbWFpbDogJycsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgTGluZU9uZTogJycsXHJcbiAgICAgICAgICAgIExpbmVUd286ICcnLFxyXG4gICAgICAgICAgICBDaXR5OiAnJyxcclxuICAgICAgICAgICAgU3RhdGU6ICcnLFxyXG4gICAgICAgICAgICBaaXBjb2RlOiAnJyxcclxuICAgICAgICAgICAgQ3JlZGl0Q2FyZE51bWJlcjogJycsXHJcbiAgICAgICAgICAgIEV4cGlyYXRpb25EYXRlOiAnJyxcclxuICAgICAgICAgICAgQ1ZWOiAnJyxcclxuICAgICAgICAgICAgQmlsbGluZ1ppcGNvZGU6ICcnXHJcblxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0b2NoYW5nZShldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtuYW1lXTogdmFsdWUgfSkgLy8gdGhpcy5zZXRTdGF0ZSh7IE5hbWUgOiBqZXdxa2xqZXdxbGt9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgKHRoaXMuc3RhdGUuY291bnRlciA9PT0gMCkgP1xyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3VudGVyOiAxIH0pfT4gY2hlY2tvdXQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDogKHRoaXMuc3RhdGUuY291bnRlciA9PT0gMSkgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ6YW1lZWVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwID5GaXJzdCBwYWdlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBpZD1cImxvZ2luLWJveFwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3VudGVyOiAyIH0pfT4gY2hlY2tvdXQgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibmFtZXNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5OYW1lfSBuYW1lPVwiTmFtZVwiIG9uQ2hhbmdlPXt0aGlzLnRvY2hhbmdlLmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwibmFtZXNcIiAvPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cIjJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gcGxhY2Vob2xkZXI9XCJlbWFpbFwiIG5hbWU9XCJFbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLnRvY2hhbmdlLmJpbmQodGhpcyl9IC8+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwiM1wiIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3Nvd3JkfSBwbGFjZWhvbGRlcj1cInBhc3Nvd3JkXCIgbmFtZT1cIlBhc3N3b3JkXCIgb25DaGFuZ2U9e3RoaXMudG9jaGFuZ2UuYmluZCh0aGlzKX0gLz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIjRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY291bnRlcjogMiB9KX0gdHlwZT1cInJlc2V0XCIgPm5leHQ8L2J1dHRvbj4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiAodGhpcy5zdGF0ZS5jb3VudGVyID09PSAyKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Db2xsZWN0cyBzaGlwczwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5MaW5lT25lfSBuYW1lPVwiTGluZU9uZVwiIGlkPVwiNVwiIHBsYWNlaG9sZGVyPVwiTGluZU9uZVwiIG9uQ2hhbmdlPXt0aGlzLnRvY2hhbmdlLmJpbmQodGhpcyl9IC8+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiNlwiIHBsYWNlaG9sZGVyPVwibGluZS10d29cIiB2YWx1ZT17dGhpcy5zdGF0ZS5MaW5lVHdvfSBuYW1lPVwiTGluZVR3b1wiIG9uQ2hhbmdlPXt0aGlzLnRvY2hhbmdlLmJpbmQodGhpcyl9IC8+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiN1wiIHBsYWNlaG9sZGVyPVwiQ2l0eVwiIHZhbHVlPXt0aGlzLnN0YXRlLkNpdHl9IG5hbWU9XCJDaXR5XCIgb25DaGFuZ2U9e3RoaXMudG9jaGFuZ2UuYmluZCh0aGlzKX0gLz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCI4XCIgcGxhY2Vob2xkZXI9XCJTdGF0ZVwiIHZhbHVlPXt0aGlzLnN0YXRlLlN0YXRlfSBuYW1lPVwiU3RhdGVcIiBvbkNoYW5nZT17dGhpcy50b2NoYW5nZS5iaW5kKHRoaXMpfSAvPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIjlcIiBwbGFjZWhvbGRlcj1cIlppcGNvZGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5aaXBjb2RlfSBuYW1lPVwiWmlwY29kZVwiIG9uQ2hhbmdlPXt0aGlzLnRvY2hhbmdlLmJpbmQodGhpcyl9IC8+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY291bnRlcjogMyB9KX0gaWQ9XCIxMFwiIHR5cGU9XCJyZXNldFwiPm5leHQ8L2J1dHRvbj4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICh0aGlzLnN0YXRlLmNvdW50ZXIgPT09IDMpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+cGF5bWVudDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCIxMVwiIHBsYWNlaG9sZGVyPVwiY3JlZGl0IGNhcmRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5DcmVkaXRDYXJkTnVtYmVyfSBuYW1lPVwiQ3JlZGl0Q2FyZE51bWJlclwiIG9uQ2hhbmdlPXt0aGlzLnRvY2hhbmdlLmJpbmQodGhpcyl9IC8+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIiB0ZXh0XCIgaWQ9XCIxMlwiIHZhbHVlPXt0aGlzLnN0YXRlLkV4cGlyYXRpb25EYXRlfSBwbGFjZWhvbGRlcj1cIiBleHBpcnkgZGF0ZVwiIG5hbWU9XCJFeHBpcmF0aW9uRGF0ZVwiIG9uQ2hhbmdlPXt0aGlzLnRvY2hhbmdlLmJpbmQodGhpcyl9IC8+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIjEzXCIgcGxhY2Vob2xkZXI9XCJDVlZcIiB2YWx1ZT17dGhpcy5zdGF0ZS5DVlZ9IG5hbWU9XCJDVlZcIiBvbkNoYW5nZT17dGhpcy50b2NoYW5nZS5iaW5kKHRoaXMpfSAvPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCIxNFwiIHZhbHVlPXt0aGlzLnN0YXRlLkJpbGxpbmdaaXBjb2RlfSBwbGFjZWhvbGRlcj1cImJpbGxpbmcgemlwIGNvZGUuXCIgbmFtZT1cIkJpbGxpbmdaaXBjb2RlXCIgb25DaGFuZ2U9e3RoaXMudG9jaGFuZ2UuYmluZCh0aGlzKX0gLz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCIxNVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50ZXI6IDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbXBsZSBQT1NUIHJlcXVlc3Qgd2l0aCBhIEpTT04gYm9keSB1c2luZyBmZXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaCgnL2NoZWNrb3V0JywgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gdGhpcy5zZXRTdGF0ZSh7IHBvc3RJZDogZGF0YS5pZCB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IHR5cGU9XCJyZXNldFwiPkJ1eTwvYnV0dG9uPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4gPC9kaXY+XHJcblxyXG5cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKSJdfQ==