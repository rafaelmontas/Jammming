import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          id: 1,
          name: "example1",
          artist: "exampleArtist1",
          album: "exampleAlbum1"
        },
        {
          id: 2,
          name: "example2",
          artist: "exampleArtist2",
          album: "exampleAlbum2"
        }
      ],
      playlistName: "My personal playlist",
      playlistTracks: [{id: 4, name: "playlistName1", artist: "playlistArtist1", album: "playlistAlbum1"}]
    }
  }
  
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    )
  }
}


export default App;
