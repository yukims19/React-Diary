import React from 'react';
import ReactDOM from 'react-dom';


const emotions = [<img src={require('./images/mood1.png')} />,
                  <img src={require('./images/mood2.png')} />,
                  <img src={require('./images/mood3.png')} />,
                  <img src={require('./images/mood4.png')} />,
                  <img src={require('./images/mood5.png')} />,
                  <img src={require('./images/mood6.png')} />]

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

//Need to be changed
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
    constructor(props){
        super(props);
        this.state = {
            sections: Array(4).fill(null),
        }
    }

    handleSave(i){
        const sections =  this.state.sections.slice();
        console.log('hihihihihihi');
        if (i===0){
            var key = document.getElementById(i).querySelector('input[name="emotions"]:checked').value;
            sections[i] = emotions[key]
        }else{
            sections[i] =document.getElementById(i).getElementsByTagName('textarea')[0].value;
        }
        this.setState({
            sections: sections,
        })
    }

    renderSection(title, i){
        return(
                <Section title={title} index={i} onClick={()=>this.handleSave(i)}/>
        )
    }
    render(){
        return(
                <div className="Person">
                <div className="Info">
                <div>{this.state.sections[0]}</div>
                <div><h6>Bad Events:</h6><p>{this.state.sections[1]}</p></div>
                <div><h6>Good Events:</h6><p>{this.state.sections[2]}</p></div>
                <div><h6>Diary:</h6><p>{this.state.sections[3]}</p></div>
                </div>

                <div className="sections">
                {this.renderSection("MOOD", 0)}
                {this.renderSection("Bad", 1)}
                {this.renderSection("Good", 2)}
                {this.renderSection("Diary", 3)}
                </div>
            </div>
        )
    }
}

class Section extends React.Component{
    render(){
        return(
                <div className="Section card">
                <div className="card-header" data-toggle="collapse" data-target={"#" + this.props.index} aria-expanded="false" aria-controls={this.props.title}>
                {this.props.title}<span className="glyphicon glyphicon-menu-down"></span>
                </div>
                <div className="collapse" id={this.props.index}>
                <div className="card card-body">
                <Content name={this.props.title} onChange={()=>this.handleChange}/>
                </div>
                <button className="btn btn-primary" onClick={this.props.onClick}> Save</button>
                </div>
                </div>

        );
    }
}

class Content extends React.Component{
    render(){
        let value = null;
        if (this.props.name == "MOOD"){
            value = <div>
                <label>
                <input type="radio" name="emotions" value="0" />
                <img src={require('./images/mood1.png')} />
                </label>
                <label>
                <input type="radio" name="emotions" value="1" />
                <img src={require('./images/mood2.png')} />
                </label>
                <label>
                <input type="radio" name="emotions" value="2" />
                <img src={require('./images/mood3.png')} />
                </label>
                <label>
                <input type="radio" name="emotions" value="3" />
                <img src={require('./images/mood4.png')} />
                </label>
                <label>
                <input type="radio" name="emotions" value="4" />
                <img src={require('./images/mood5.png')} />
                </label>
                <label>
                <input type="radio" name="emotions" value="5" />
                <img src={require('./images/mood6.png')} />
                </label>
                </div>
        }else{
            value = <textarea onChange={()=>this.props.onChange}></textarea>
        }
        return(
             value
        )
    }

}

ReactDOM.render(<Person/>,
                document.getElementById('root1'));
ReactDOM.render(<Person/>,
                document.getElementById('root2'));
