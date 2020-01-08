import React from 'react';
import ReactDOM from 'react-dom';
import Anecdote from './Anecdote';
import anecdotesData from './AnecdotesData';


const anecdotesArray = anecdotesData.map(anecdote => <Anecdote key={anecdote.id} text={anecdote.text} votes={anecdote.votes} /> )

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      votes: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleVoteClick = this.handleVoteClick.bind(this)
  }

  handleClick() {
 this.setState(prevState => {
   return {
    number: Math.floor(Math.random() * 6)
   }
 })
  }


  handleVoteClick () {
    this.setState(prevState => {
      return {
       votes: prevState.votes + 1
      }
    })
     }

render() {
  
    return(
        <div >
            {anecdotesArray[this.state.number]}
            <p> has {this.state.votes} votes</p>
            <button onClick={this.handleClick}>Next anecdote</button>
            <button onClick={this.handleVoteClick}>Vote</button>
        </div>
    )
}
}



ReactDOM.render(<App />, document.getElementById('root'));


