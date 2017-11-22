import React, { Component } from 'react';
import axios from "axios";
import cookie from 'react-cookies'
import MyButton from './MyButton.js';
class Movie_list extends Component {
 constructor() {
    super();
    this.state = {
      movie: [],
      movieName:'',
      inputType:'text',
      loading : true
    }
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 }
 updateState(e) {
  this.setState({movieName: e.target.value});
  
}

handleSubmit() {
  //const apiKey = '6cbcfae44332ef3be1d59dc9361938b1';
  console.log(this.state.movieName)
  let requestUrl = `https://api.themoviedb.org/3/search/movie?api_key=6cbcfae44332ef3be1d59dc9361938b1&language=en-US&query=${this.state.movieName}&page=1&include_adult=false`;
  axios.get(requestUrl).then(response => {
      this.setState({movie: response.data.results})
  });
}

componentDidMount() {
  setTimeout(() => this.setState({ loading: false }), 1500); // simulates loading of data
  //const apiKey = '6cbcfae44332ef3be1d59dc9361938b1';
  console.log(this.state.movieName)
  let requestUrl = `https://api.themoviedb.org/3/movie/popular?api_key=6cbcfae44332ef3be1d59dc9361938b1`;
  axios.get(requestUrl).then(response => {
      this.setState({movie: response.data.results})
  });
}

render(){
  
  if(this.state.loading) { 
    return(
      <main className="main-content">
        <div className="container">
          <div className="page">
             <h3> Loading...</h3>
          </div>
        </div>
      </main>)
  }
  
  return(
    <main className="main-content">
     <div className="container">
        <div className="page">
        <div className="breadcrumbs">
        </div>
        <div className="filters">
          <div className="form-group col-sm-12">
            <div className="form-control col-sm-4">
              Search movie:
                <input type="text" className="form-control" value={this.state.movieName} onChange={this.updateState} />
              </div>
              <MyButton  title="Search" clickMethod={this.handleSubmit}/>
            </div>
          </div>
          <hr/>
              
          <div classname className="movie-list">
            {
              this.state.movie.map((movies,key)=>{
                return(
                  <div className="movie">
                  <div className="movie-poster">
                  <a href={`/Movie_details?id=${movies.id}`}><img src={`https://image.tmdb.org/t/p/w320${movies.poster_path}`} alt="#"/></a></div>
                  <div className="movie-title"><a href={`/Movie_details?id=${movies.id}`}>{movies.title}</a></div>
                  <p>{movies.overview}</p>
                  </div>
                )
              }) 
            }
          </div>                
        </div>
      </div> 
  </main>
  )
}
}
export default Movie_list