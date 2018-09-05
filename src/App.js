import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SketchPicker } from 'react-color';

class App extends Component {
  state = {
    background: '#fff',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };


  render() {
    return (
      <div className="h-100" >
        <div className="row h-100 justify-content-center align-items-center" style={{ background: this.state.background }}>
          <div className="card col-lg-7 text-center mt-5">
            <div className="card-body">
              <h5 className="card-title">Background Color Picker Card</h5>
              <div className="form-group">
                <SketchPicker
                  color={this.state.background}
                  onChangeComplete={this.handleChangeComplete}
                />
              </div>
              <div className="form-group">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
