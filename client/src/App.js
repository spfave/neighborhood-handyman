import { HashRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomerDashboard from "./pages/CustomerDashboard";

function App() {
  return (
    <HashRouter>
      <div className="App">
        {/* Need to refactor in future so Login page doesn't display nav links */}
        <Header />
        <div className="content">
          <Route path="/cust-dashboard" component={CustomerDashboard}/>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;