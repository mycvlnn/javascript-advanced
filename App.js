import html from "./lib/core.js";
import { connect } from "./redux/store.js";

function App(props) {
  console.log(props);

  return html`
    <h1>Build Reactjs Library</h1>
    <p>Hello world</p>
  `;
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
