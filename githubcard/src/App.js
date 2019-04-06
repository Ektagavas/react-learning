import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class App extends Component {
  state = {
    cards: [
      // {
      //   name: "Paul O’Shannessy",
      //   companyName: "Facebook",
      //   avatarUrl: "https://avatars1.githubusercontent.com/u/8445?v=4"
      // },
      // {
      //   name: "Michael D. Ivey",
      //   companyName: "@RiotGames",
      //   avatarUrl: "https://avatars0.githubusercontent.com/u/6?v=4",
      // },
      // {
      //   name: "Justin Palmer",
      //   companyName: "GitHub",
      //   avatarUrl: "https://avatars3.githubusercontent.com/u/25?v=4",
      // }
    ]
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards} />
      </div>

    );
  }

  addNewCard = (cardInfo) => {
    this.setState((state) => {
      return {
        cards: state.cards.concat(cardInfo)
      }
    })
  }
}

// ref={(input) => this.userName = input}

class Form extends React.Component {
  state = {
    userName: ''
  }

  render() {
    return (
      <form style={{ margin: '1em' }} onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Github username"
          value={this.state.userName} 
          onChange={(event) => this.setState({userName: event.target.value})}/>
        <button type="submit">Add card</button>
      </form>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Input', this.state.userName);
    Axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then(res => {
      this.props.onSubmit(res.data);
      this.state.userName = '';
    })
    
  }
}



const Card = (props) => {
  return (
    <div style={{ margin: '1em' }}>
      <img alt={props.name} src={props.avatar_url} height="75" width="75" />
      <div style={{ display: 'inline-block', marginLeft: 10 }}>
        <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>
          {props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card key={card.id} {...card} />)}
    </div>

  );
};

export default App;
