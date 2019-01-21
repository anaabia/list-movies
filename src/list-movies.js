import React, {Component} from 'react';
import './list-movies.css';

class ListMovies extends Component {
  
  getFans = id => {
    const usersId = this.props.profiles.filter(p => p.favoriteMovieID == id).map(p => p.userID);
    const lst = Object.values(this.props.users).filter(u => usersId.find(ui => ui == u.id));
    return lst.length > 0 ? lst : [{id: 1, name: 'None of the current users liked this movie'}];
  }

  render(){
  	return (<div className="list-movies">
    		<ol>
            {Object.values(this.props.movies).map(m => {
    			return (
						<ol>
    						<h1> {m.name} </h1>
							{this.getFans(m.id).map(f => <li key={f.id}> {f.name} </li>)}
						</ol>
					);
              })}
			</ol>
		</div>);
  }
}

export default ListMovies;