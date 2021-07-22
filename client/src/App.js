// Package imports
import { 
  BrowserRouter, 
  Route, 
  Redirect 
} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Component imports
import Header from "./components/Header";
import Footer from "./components/Footer";

// Page imports
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App">
          {/* Need to refactor in future so Login page doesn't display nav links */}
          <Header />
          <div className="content">
            {/* Sets default page to Dashboard */}
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
            <Route exact path="/account" component={Account} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;