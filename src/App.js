import SpotifyWebApi from "spotify-web-api-js";
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromResponse } from "./spotify";
import { useStateValue } from './DataLayer/StateProvider';
import { useEffect } from 'react';

const spotify = new SpotifyWebApi();

function App() {
  const [{token}, dispatch] = useStateValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    console.log('hash: ', hash)
    window.location.hash = "";
    let _bearerToken = hash.access_token;
    console.log('_token: ', _bearerToken)

    if (_bearerToken) {
      spotify.setAccessToken(_bearerToken);

      dispatch({
        type: "SET_TOKEN",
        token: _bearerToken,
      });

      spotify.getMe()
      .then((user) => {
        console.log('user: ', user)
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists()
      .then((playlists) => {
        console.log('playlists: ', playlists)
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcDsT9K2cIn55')
      .then((discover_weekly) => {
        console.log('playlists: ', discover_weekly)
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly,
        });
      });
    }
  }, [token, dispatch]);

  return (
        <div className="App">
          {!token && <Login/>}
          {token && <Player/>}
        </div>
  );
}

export default App;
