import AlbumSearch from "./components/AlbumSearch";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  return (
    <Router>
      <AlbumSearch />
    </Router>
  );
};

export default App;
