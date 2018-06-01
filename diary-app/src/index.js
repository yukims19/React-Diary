import React from 'react';
import ReactDOM from 'react-dom';
//import 'index.css';

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

class Body extends React.Component{
    render(){
        return(
            <div className = "container">
                <Person/>
                <Person/>
            </div>
        )
    }
}
class Person extends React.Component{
    render(){
        return(
            <div className="Person">
                <Section title="MOOD" />
                <Section title="Bad" />
                <Section title="Good" />
                <Section title="Diary" />
            </div>
        )
    }
}

class Section extends React.Component{
    render(){
        return(
                <div className="Section card">
                <div className="card-header" data-toggle="collapse" data-target={"#" + this.props.title} aria-expanded="false" aria-controls={this.props.title}>
                {this.props.title}<span className="glyphicon glyphicon-menu-down"></span>
            </div>
                <div className="collapse" id={this.props.title}>
                <div className="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
                </div>
                </div>

        );
    }
}

ReactDOM.render(<Person/>,
                document.getElementById('root1'));
ReactDOM.render(<Person/>,
                document.getElementById('root2'));
