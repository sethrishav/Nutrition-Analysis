import React,{ Component } from 'react';
import './App.css';
import TextArea from "./components/TextArea";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import FactCard from "./components/FactCard";
import ErrorMessage from './components/ErrorMessage';

class App extends Component {
  
  constructor() {
    super();
    this.app_id = "e83d474d";
    this.app_key = "37dae24dde9c2156b9c790f5c6e74906";
    this.input = "";
    this.input_arr = [];
    this.error = undefined;
    this.state = {
      data: undefined
    }
  }

  typing = e => {
    this.input = e.target.value;
  }

  analyze = () => {
    this.input_arr = this.input.split("\n");
    this.error = undefined;
    this.fetchData();
  }

  fetchData() {
    Promise.all(this.input_arr.map(element => {
        return(fetch(`https://api.edamam.com/api/nutrition-data?app_id=${this.app_id}&app_key=${this.app_key}&ingr=${element}`)
        .then(response => response.json())
        .then((single_data) => {
          this.error = (this.error)? "bad_request": single_data.error;
          return single_data;
        })
        .catch(error => {
          alert(error);
          window.location.reload();
        }));
    }))
    .then(data => {
      if(data[0]) {
        this.setState({data});
      }
    });
  }

  newRecipe = e => {
    window.location.reload();
  } 

  render() {
    return (
      <div className="container-fluid">
          <div className="container col-lg-9 col-xl-8" id="container">
            <div className="row">
                <div className="col-md-12 bg-white ">
                  <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center title">Nutrition Analysis API Demo</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="text-center col-md-12">
                      <p className="notes">Enter an ingredient list list for what you are cooking, like <span className="text-success">"1 cup rice, 1 dosa"</span>, ect.
                      <br/>
                      Enter each ingredient on a new line.
                      </p>
                      <div className="col-12 col-sm-7 " id="leftArea">
                        <TextArea typing={this.typing}/>
                        <Buttons analyze={this.analyze} newRecipe={this.newRecipe} data={this.state.data}/>
                        {(this.error)?<ErrorMessage/>:""}
                        <div className="demo-results">
                          <div className="col-12">
                            {(this.state.data)?<Table data={this.state.data} inputs={this.input_arr}/>:""}
                          </div>
                        </div>
                      </div>
                      <div id="rightArea" className="col-12 col-sm-5 ">
                        <div className="fact-container">
                            {(this.state.data)?<FactCard data={this.state.data}/>:""}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
