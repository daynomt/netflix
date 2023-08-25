import "./App.css";
import Banner from "./components/Banner/Banner";

import Nav from "./components/Nav/Nav";
import Rows from "./components/Rows/Rows";
import requests from "./requests";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Rows
        title="Netflix original"
        fetchUrl={requests.fetchNetflix0riginals}
        isLargeRow
      />
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
