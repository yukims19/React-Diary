import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    state= {users: []}

    componentDidMount(){
        fetch('/users/yuki')
            .then (res => res.json())
            .then(users => this.setState({users}));
    }
    render(){
        return(
                <div className = "app">
                <h1>Users</h1>
                <ul>
                {this.state.users.map(user =>
                                      <li key={user.id}>{user.username}</li>)}
                </ul>
                </div>
        );
    }
}

ReactDOM.render(<App/>,
                document.getElementById('root'));
