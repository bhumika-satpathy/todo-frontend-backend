import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import queryString from 'query-string';
import AllTodos from './components/AllTodos';
import CreateNotes from './components/CreateNotes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 0,
          title: '',
        },
      ],
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
    const values = queryString.parse(this.props.location.search);
    // const getNote = await this.postNote();
    const notesData = await this.getNoteList();
    this.setState({
      todos: notesData,
    });
  }

  deleteNote = (noteId) => {
    const { todos } = this.state;
    const notesList = [...todos];
    const res = notesList.filter((obj) => obj.noteId !== noteId);
    this.setState({
      listOfNotes: [...res],
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
    const { todos } = this.state;
    return (
      <Router>
        <Switch>

          <Route exact path="/">
            <AllTodos
              buttonClick={this.createNew}
              todos={todos}
              onClickDone={(text) => this.onClickDone(text)}
              deleteNote={(noteId) => this.deleteNote(noteId)}
            />
          </Route>

          <Route exact path="/new">
            <CreateNotes buttonClick={this.updateNotes} />
          </Route>

        </Switch>
      </Router>
    );
  }
}

export default App;
