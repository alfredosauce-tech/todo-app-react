import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    
  super(props)
  this.handleClick = this.handleClick.bind(this);
this.state = {
  Text:'',
  todos:[],
  isclicked: false
};
  }
onChange = e => {
  this.setState({
    Text: e.target.value
  })
}
//this is my onclickhandler button (handleclick)
// //handleClick = ()=>{
//   this.setState(prevState => ({
//     isclicked: !prevState.isclicked
//   }));
// }
//git handleClick={index => this.delete(index)}

  formsubmit= e => {

    e.preventDefault()
    this.setState({
      todos : [...this.state.todos, this.state.Text],
      Text: ''
    })
  }

  delete = (index) => {
    let objectCopy = [...this.state.todos]
    objectCopy.splice(index, 1)
    this.SetState({todos: [...objectCopy]})

  }

  
  render() {
    return (
      <div>
        <h1>

        </h1>
        <form onSubmit = {this.formsubmit}>
        <input value = {this.state.text} onChange= {this.onChange}/>
        <button>

        {this.state.isclicked ? 'ON' : 'OFF'}
        </button>
    </form>
    <div>
    {this.state.todos.map((item , index)=>{
    return <p key={index}>{this.state.todos[index]}
    	<button onClick={() => props.handleClick(index)}>Delete</button>
    
      </p>
    })}
    </div>
        
      </div>
    )
  }
}
export default App
