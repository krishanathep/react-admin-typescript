import AuthProvider from 'react-auth-kit'
import createStore from 'react-auth-kit/createStore';
import Routes from "./Routes";
import "./App.css";

function App() {
  const store = createStore({
    authName:'_auth',
    authType:'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  });
  return (
    <>
      <AuthProvider store={store}>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
