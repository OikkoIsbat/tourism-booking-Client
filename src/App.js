import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Activities from './Components/Activities/Activities';
import Login from './Components/Login/Login';
import { Route, Router, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <AuthProvider>
        <Header></Header>
        <Footer></Footer>
      </AuthProvider>



    </div >
  );
}

export default App;
