import React, { Component } from 'react';
import axios from "axios";
import Image from './Image.js';

class Movie_details extends Component {
 constructor(props) {
    super(props);
    this.state = {
      movies:[]
    }
 }

componentDidMount() {
     
    let queryString = require('query-string');
    let parsed = queryString.parse(this.props.location.search);
    let id = parsed['id'];
    let requestUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=6cbcfae44332ef3be1d59dc9361938b1`;
    axios.get(requestUrl).then(response => {
        console.log(response.data)
        this.setState({movies: response.data})
    });
}

render(){
  return( 

    <main className="main-content">
        <div className="container">
            <div className="page">
                <div class="breadcrumbs">  </div>
                <div className="content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="movie-poster">
                            <Image imgUrl={`https://image.tmdb.org/t/p/w320${this.state.movies['poster_path']}`} imageTitle="figure image"/>
                        </div>
                        </div>
                        <div className="col-md-6">
                            <h2 className="movie-title"> {this.state.movies['title']}</h2>
                            <div className="movie-summary">
                                <p>{this.state.movies['overview']}</p>
                            </div>
                            <ul className="movie-meta">
                                <li><strong>Rating:</strong> 
                                    <div className="star-rating" title="Rated 4.00 out of 5"><span ><strong className="rating">{this.state.movies['vote_average']}</strong> out of 5</span></div>
                                </li>
                                <li><strong>Length:</strong> {this.state.movies['runtime']}</li>
                                <li><strong>Premiere:</strong>{this.state.movies['release_date']} </li>
                                <li><strong>Tag line:</strong>{this.state.movies['tagline']}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </main>
  )
}
}
export default Movie_details