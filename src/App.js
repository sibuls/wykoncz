import React, { PureComponent } from 'react';
import Footer from './components/footer/Footer';

import professions from './data/professions.js';
import Burger from './components/burger/Burger';
import House from './components/house/House';
import Header from './components/header/Header';
import MenuPage from './components/pages/MenuPage';

import './sass/style.scss';
import { AppContext, defaultObject } from './AppContext';
import UserInfo from './UserInfo';
import Button from './Button';
import {
  BrowserRouter as Router,
  HashRouter,
  Link,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import UserPage from './components/user/User';
import StartPage from './components/pages/StartPage';

class App extends PureComponent {
  state = {
    isUserLogged: defaultObject.isUserLogged,

    isBurgerActive: false,
    professions: [],
    profession: '',
    descriptionPl: '',
    // dotTint: '',
    pprofession: '',
    contractors: [],
    burgerChoice: '',
    contractor: '',
  };

  changeProfession = (en, pl, burgerChoice) => {
    const profession = en;
    const descriptionPl = pl;

    this.setState((prevstate) => ({
      profession,
      pprofession: prevstate.profession,
      descriptionPl,
      isMenuActive: true,
      burgerChoice,
    }));
  };

  // changeTint = (pl) => {
  //   const dotTint = pl;
  //   this.setState({
  //     dotTint,
  //   });
  // };

  componentDidMount() {
    this.setState({
      professions: professions,
      isLoaded: true,
    });
  }

  burgerChange = (id) => {
    this.setState({ isBurgerActive: !this.state.isBurgerActive });
    // console.log('burger has been clicked');
  };

  burgerChoice = (burgerChoice) => {
    this.setState({
      burgerChoice,
    });
  };

  handleToggleStateIsLogged = () =>
    this.setState((prevState) => ({
      isUserLogged: !prevState.isUserLogged,
    }));

  setContractor = (contractor) => {
    this.setState({
      contractor,
    });
  };

  // setContractor = (idContractor) => console.log('setcsdfsdf');

  render() {
    console.log(this.state.contractor);
    // console.log(this.state.profession + ' ---- app this state prof');
    return (
      <Router>
        <div className='app'>
          <Header />
          {/*  */}
          <Switch>
            <Route exact path='/'>
              <div id='wrapper' className='wrapper'>
                <House
                  changeProfession={this.changeProfession}
                  profession={this.state.profession}
                  professions={this.state.professions}
                />{' '}
                <div className='wrapper-box'>
                  <MenuPage
                    professions={this.state.professions}
                    profession={this.state.profession}
                    // pprofession={this.state.pprofession}
                    descriptionPl={this.state.descriptionPl}
                    contractors={this.state.contractors}
                    burgerChoice={this.state.burgerChoice}
                  />
                  <MainPage
                    professions={this.state.professions}
                    profession={this.state.profession}
                    // pprofession={this.state.pprofession}
                    descriptionPl={this.state.descriptionPl}
                    contractors={this.state.contractors}
                    burgerChoice={this.state.burgerChoice}
                    setContractor={this.setContractor}
                  />
                </div>
              </div>
            </Route>

            <Route path='/:user'>
              {' '}
              <UserPage contractor={this.state.contractor} />
            </Route>
          </Switch>
          <Burger
            isBurgerActive={this.state.isBurgerActive}
            burgerChange={this.burgerChange}
            changeProfession={this.changeProfession}
            burgerChoice={this.burgerChoice}
          />
          <Footer />{' '}
          <AppContext.Provider
            value={{
              isUserLogged: this.state.isUserLogged,
              toggleLoggedState: this.handleToggleStateIsLogged,
            }}
          >
            {/* <UserInfo /> */}
            {/* <Button /> */}
          </AppContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
