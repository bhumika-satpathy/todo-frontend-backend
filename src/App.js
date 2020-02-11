import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import AllTodos from './components/AllTodos';
import CreateNotes from './components/CreateNotes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCreated: false,
      todos: ['First Note'],
    };
  }

  getNoteList=async () => {
    const result = await axios.get('http://localhost:8080/notes');
    return result.data;
  }

  // postNote=async () => {
  //   axios({
  //     method: 'post',
  //     url: 'http://localhost:8080/note',
  //     data: {
  //       title: this.state.title,
  //     },
  //     validateStatus: (status) => true,
  //   }).catch((error) => {
  //     console.log(error);
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // }

  componentDidMount=async () => {
    // const getNote = await this.postNote();
    const notesData = await this.getNoteList();
    this.setState({
      todos: notesData,
    });
  }


  onClickDone = (text) => {
    const { todos } = this.state;
    const index = todos.indexOf(text);
    todos.splice(index, 1);
    this.setState({
      todos: [...todos],
      isCreated: false,
    });
  }

  updateNotes=async () => {
    const { todos } = this.state;
    const todo = document.getElementById('textbox').value;
    const payload = {
      title: 'New Title',
      description: todo,
    };
    const res = await axios.post('http://localhost:8080/note', payload);
    this.setState({
      todos: [res.data, ...todos],
      // [todo, ...todos],
      isCreated: false,
    }, () => {
      // console.log('Boom', this.state.todos);
    });
  }

  createNew = () => {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      ...this.state,
      isCreated: true,
    });
  }

  render() {
    const { isCreated, todos } = this.state;
    return (
      !isCreated
        ? <AllTodos buttonClick={this.createNew} todos={todos} onClickDone={(text) => this.onClickDone(text)} />
        : <CreateNotes buttonClick={this.updateNotes} />
    );
  }
}

export default App;
