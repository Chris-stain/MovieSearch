import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    console.log("This is my initializer")

    const movies = [
      {id: 0, title:"AvengersL Infinity War", overview:"OMG Thanos" }
    ]


    this.state = {rows: [
      <p key="1"> This Is My Row</p>,
      <p key="2"> This Is My Row</p>,
      <p key="3"> This Is My Row</p>
      
    ]}
  }

  render() { 
    return (
      <div className="App">
      
        <table className="titleBar"> 
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"/>
              </td>
              <td width="8"/>
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input style= {{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} placeholder="Enter search term"/>

        {this.state.rows}

      </div>
    );
  }
}
export default App;
