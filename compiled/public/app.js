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
            null,
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
                React.createElement('input', { type: 'passowrd', id: '3', value: this.state.passowrd, placeholder: 'passowrd', name: 'Password', onChange: this.tochange.bind(this) }),
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
                { id: '15', onClick: () => this.setState({ counter: 4 }), type: 'reset' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3B1YmxpYy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY291bnRlciIsIk5hbWUiLCJFbWFpbCIsIlBhc3N3b3JkIiwiTGluZU9uZSIsIkxpbmVUd28iLCJDaXR5IiwiU3RhdGUiLCJaaXBjb2RlIiwiQ3JlZGl0Q2FyZE51bWJlciIsIkV4cGlyYXRpb25EYXRlIiwiQ1ZWIiwiQmlsbGluZ1ppcGNvZGUiLCJ0b2NoYW5nZSIsImV2ZW50IiwibmFtZSIsInZhbHVlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiYmluZCIsImVtYWlsIiwicGFzc293cmQiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDOUJDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtDLEtBQUwsR0FBYTtBQUNUQyxxQkFBUyxDQURBOztBQUlUQyxrQkFBTSxFQUpHO0FBS1RDLG1CQUFPLEVBTEU7QUFNVEMsc0JBQVUsRUFORDtBQU9UQyxxQkFBUyxFQVBBO0FBUVRDLHFCQUFTLEVBUkE7QUFTVEMsa0JBQU0sRUFURztBQVVUQyxtQkFBTyxFQVZFO0FBV1RDLHFCQUFTLEVBWEE7QUFZVEMsOEJBQWtCLEVBWlQ7QUFhVEMsNEJBQWdCLEVBYlA7QUFjVEMsaUJBQUssRUFkSTtBQWVUQyw0QkFBZ0I7O0FBRWhCO0FBakJTLFNBQWI7QUFvQkg7O0FBR0RDLGFBQVNDLEtBQVQsRUFBZ0I7QUFDWixjQUFNLEVBQUVDLElBQUYsRUFBUUMsS0FBUixLQUFrQkYsTUFBTUcsTUFBOUI7O0FBRUEsYUFBS0MsUUFBTCxDQUFjLEVBQUUsQ0FBQ0gsSUFBRCxHQUFRQyxLQUFWLEVBQWQsRUFI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V1ksR0FBaEUsRUFBcUUsTUFBSyxLQUExRSxFQUFnRixVQUFVLEtBQUtFLFFBQUwsQ0FBY1MsSUFBZCxDQUFtQixJQUFuQixDQUExRixHQUhKO0FBQUE7QUFHMEgsK0NBSDFIO0FBSUksK0NBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsSUFBdEIsRUFBNEIsT0FBTyxLQUFLdkIsS0FBTCxDQUFXYSxjQUE5QyxFQUE4RCxhQUFZLG1CQUExRSxFQUE4RixNQUFLLGdCQUFuRyxFQUFvSCxVQUFVLEtBQUtDLFFBQUwsQ0FBY1MsSUFBZCxDQUFtQixJQUFuQixDQUE5SCxHQUpKO0FBQUE7QUFJK0o7QUFKL0osYUFGSjtBQVFRO0FBQUE7QUFBQSxrQkFBUSxJQUFHLElBQVgsRUFBZ0IsU0FBUyxNQUFNLEtBQUtKLFFBQUwsQ0FBYyxFQUFFbEIsU0FBUyxDQUFYLEVBQWQsQ0FBL0IsRUFBOEQsTUFBSyxPQUFuRTtBQUFBO0FBQUEsYUFSUjtBQUFBO0FBUWdHO0FBUmhHLFNBREYsR0FZRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBMUNwQjtBQStDSDtBQW5GNkI7O0FBc0ZsQ3lCLFNBQVNKLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkssU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCB7IGV4dGVuZCB9ID0gcmVxdWlyZShcImxvZGFzaFwiKTtcclxuLy8gY29uc3QgeyByZW5kZXIgfSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb3VudGVyOiAwLFxyXG5cclxuXHJcbiAgICAgICAgICAgIE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBFbWFpbDogJycsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgTGluZU9uZTogJycsXHJcbiAgICAgICAgICAgIExpbmVUd286ICcnLFxyXG4gICAgICAgICAgICBDaXR5OiAnJyxcclxuICAgICAgICAgICAgU3RhdGU6ICcnLFxyXG4gICAgICAgICAgICBaaXBjb2RlOiAnJyxcclxuICAgICAgICAgICAgQ3JlZGl0Q2FyZE51bWJlcjogJycsXHJcbiAgICAgICAgICAgIEV4cGlyYXRpb25EYXRlOiAnJyxcclxuICAgICAgICAgICAgQ1ZWOiAnJyxcclxuICAgICAgICAgICAgQmlsbGluZ1ppcGNvZGU6ICcnXHJcblxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0b2NoYW5nZShldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtuYW1lXTogdmFsdWUgfSkgLy8gdGhpcy5zZXRTdGF0ZSh7IE5hbWUgOiBqZXdxa2xqZXdxbGt9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgKHRoaXMuc3RhdGUuY291bnRlciA9PT0gMCkgP1xyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3VudGVyOiAxIH0pfT4gY2hlY2tvdXQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICA6ICh0aGlzLnN0YXRlLmNvdW50ZXIgPT09IDEpID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCA+Rmlyc3QgcGFnZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gaWQ9XCJsb2dpbi1ib3hcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY291bnRlcjogMiB9KX0+IGNoZWNrb3V0IDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm5hbWVzXCIgdmFsdWU9e3RoaXMuc3RhdGUuTmFtZX0gbmFtZT1cIk5hbWVcIiBvbkNoYW5nZT17dGhpcy50b2NoYW5nZS5iaW5kKHRoaXMpfSBwbGFjZWhvbGRlcj1cIm5hbWVzXCIgLz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCIyXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IHBsYWNlaG9sZGVyPVwiZW1haWxcIiBuYW1lPVwiRW1haWxcIiBvbkNoYW5nZT17dGhpcy50b2NoYW5nZS5iaW5kKHRoaXMpfSAvPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc293cmRcIiBpZD1cIjNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzb3dyZH0gcGxhY2Vob2xkZXI9XCJwYXNzb3dyZFwiICBuYW1lPVwiUGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy50b2NoYW5nZS5iaW5kKHRoaXMpfSAvPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIjRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY291bnRlcjogMiB9KX0gdHlwZT1cInJlc2V0XCIgPm5leHQ8L2J1dHRvbj4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiAodGhpcy5zdGF0ZS5jb3VudGVyID09PSAyKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Db2xsZWN0cyBzaGlwczwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgdmFsdWU9e3RoaXMuc3RhdGUuTGluZU9uZX0gbmFtZT1cIkxpbmVPbmVcIiBpZD1cIjVcIiBwbGFjZWhvbGRlcj1cIkxpbmVPbmVcIiBvbkNoYW5nZT17dGhpcy50b2NoYW5nZS5iaW5kKHRoaXMpfSAvPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIjZcIiAgcGxhY2Vob2xkZXI9XCJsaW5lLXR3b1wiIHZhbHVlPXt0aGlzLnN0YXRlLkxpbmVUd299IG5hbWU9XCJMaW5lVHdvXCIgICBvbkNoYW5nZT17dGhpcy50b2NoYW5nZS5iaW5kKHRoaXMpfSAvPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIjdcIiBwbGFjZWhvbGRlcj1cIkNpdHlcIiB2YWx1ZT17dGhpcy5zdGF0ZS5DaXR5fSBuYW1lPVwiQ2l0eVwiICBvbkNoYW5nZT17dGhpcy50b2NoYW5nZS5iaW5kKHRoaXMpfSAvPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIjhcIiBwbGFjZWhvbGRlcj1cIlN0YXRlXCIgIHZhbHVlPXt0aGlzLnN0YXRlLlN0YXRlfSBuYW1lPVwiU3RhdGVcIiBvbkNoYW5nZT17dGhpcy50b2NoYW5nZS5iaW5kKHRoaXMpfSAvPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIjlcIiBwbGFjZWhvbGRlcj1cIlppcGNvZGVcIiAgdmFsdWU9e3RoaXMuc3RhdGUuWmlwY29kZX0gbmFtZT1cIlppcGNvZGVcIiAgb25DaGFuZ2U9e3RoaXMudG9jaGFuZ2UuYmluZCh0aGlzKX0gLz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY291bnRlcjogMyB9KX0gaWQ9XCIxMFwiIHR5cGU9XCJyZXNldFwiPm5leHQ8L2J1dHRvbj4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICh0aGlzLnN0YXRlLmNvdW50ZXIgPT09IDMpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+cGF5bWVudDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCIxMVwiIHBsYWNlaG9sZGVyPVwiY3JlZGl0IGNhcmRcIiAgdmFsdWU9e3RoaXMuc3RhdGUuQ3JlZGl0Q2FyZE51bWJlcn0gbmFtZT1cIkNyZWRpdENhcmROdW1iZXJcIiBvbkNoYW5nZT17dGhpcy50b2NoYW5nZS5iaW5kKHRoaXMpfSAvPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCIgdGV4dFwiIGlkPVwiMTJcIiAgdmFsdWU9e3RoaXMuc3RhdGUuRXhwaXJhdGlvbkRhdGV9IHBsYWNlaG9sZGVyPVwiIGV4cGlyeSBkYXRlXCIgbmFtZT1cIkV4cGlyYXRpb25EYXRlXCIgb25DaGFuZ2U9e3RoaXMudG9jaGFuZ2UuYmluZCh0aGlzKX0gLz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiMTNcIiBwbGFjZWhvbGRlcj1cIkNWVlwiICB2YWx1ZT17dGhpcy5zdGF0ZS5DVlZ9IG5hbWU9XCJDVlZcIiBvbkNoYW5nZT17dGhpcy50b2NoYW5nZS5iaW5kKHRoaXMpfS8+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIjE0XCIgIHZhbHVlPXt0aGlzLnN0YXRlLkJpbGxpbmdaaXBjb2RlfSBwbGFjZWhvbGRlcj1cImJpbGxpbmcgemlwIGNvZGUuXCIgbmFtZT1cIkJpbGxpbmdaaXBjb2RlXCIgb25DaGFuZ2U9e3RoaXMudG9jaGFuZ2UuYmluZCh0aGlzKX0gLz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiMTVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY291bnRlcjogNCB9KX0gdHlwZT1cInJlc2V0XCI+QnV5PC9idXR0b24+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpIl19