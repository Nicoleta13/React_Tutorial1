import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'wed', name: 'Max', age: 28 },
      { id: 'wed2', name: 'Manu', age: 29 },
      { id: 'wed1', name: 'Maria', age: 30 }
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    //using the spread operator
    const persons = [...this.state.persons]
    //will remove 1 element from the array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }


  nameChangedHandler = (event, id) => {
    // will hold the index of the person in the array 
    // for which the Ids are equal
    //will return true or false
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // create a new javascript object
    // use the spread operator (...)
    const person = {
      ...this.state.persons[personIndex]
    };


    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //or the second option is to use the Object.assign() function
    //const person = Object.assign({}, this.state.persons[personIndex]); 

    this.setState({
      persons: persons
    })
  }

  render() {
    //it was transfered into StyledButton
    //  

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      
        <div className="App">
          <h1>Hi, I am a React App</h1>
          <p className={classes.join(' ')}>Thsi is really  working!!</p>
          <StyledButton alt={this.state.showPersons}
            onClick={this.togglePersonsHandler}>Toggle Persons
            </StyledButton>
          {persons}
        </div>
    );
  }
}

export default App;

