import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Posts from "./containers/Posts/Posts";
import Blog from "./containers/Blog/Blog";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

{
  /* import React, { Component } from "react";
 import { BrowserRouter } from "react-router-dom";
 import Blog from "./containers/Blog/Blog";
 class App extends Component { */
}
//   render() {
//     return (
//       <BrowserRouter>
//         <div className="App">
//           <Blog />
//         </div>
//       </BrowserRouter>
//     );
//   }
// }
// export default App;
