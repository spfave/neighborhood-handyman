// Package imports
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Component imports
import Header from './components/Header';
import Footer from './components/Footer';

// Page imports
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import CreateJob from './pages/CreateJob';
import EditJob from './pages/EditJob';
import CreateProposal from './pages/CreateProposal';
import Listings from './pages/Listings';
import ManageJob from './pages/ManageJob';
import ManageProposal from './pages/ManageProposal';

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

// Once we have backend connected, since everyone will be unauthenticated at the moment
export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter basename="/">
        {Auth.loggedIn() ? (
          <div className="App">
            <div className="non-footer m-2 m-sm-4">
              <Header />
              <section className="content">
                {/* Set default page to Dashboard */}
                <Route exact path="/">
                  <Redirect to="/dashboard" />
                </Route>
                <Route exact path="/account" component={Account} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/listings" component={Listings} />
                <Route exact path="/createJob" component={CreateJob} />
                <Route exact path="/job/:jobID" component={EditJob} />
                <Route exact path="/manageJob/:jobID" component={ManageJob} />
                <Route exact path="/manageProposal/:proposalID" component={ManageProposal} />
                <Route
                  exact
                  path="/createProposal"
                  component={CreateProposal}
                />
              </section>
            </div>
            <Footer />
          </div>
        ) : (
          // Once user is logged in, /login and /signup are no longer accessible
          <section className="content">
            {/* Catch all for any URLs besides /login or /signup */}
            <Route path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </section>
        )}
      </BrowserRouter>
    </ApolloProvider>
  );
}
