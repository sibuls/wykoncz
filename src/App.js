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
  Link,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import MainPage from './components/pages/MainPage';

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

  render() {
    console.log(this.state.profession + ' ---- app this state prof');
    return (
      <Router>
        <div className='app'>
          <Header />
          <div id='wrapper' className='wrapper'>
            <House
              changeProfession={this.changeProfession}
              profession={this.state.profession}
              professions={this.state.professions}
              // changeTint={this.changeTint}
              // dotTint={this.state.dotTint}
            />

            <MenuPage
              professions={this.state.professions}
              profession={this.state.profession}
              // pprofession={this.state.pprofession}
              descriptionPl={this.state.descriptionPl}
              contractors={this.state.contractors}
              burgerChoice={this.state.burgerChoice}
            />
            {/* <ContractorsList /> */}
            <MainPage
              professions={this.state.professions}
              profession={this.state.profession}
              // pprofession={this.state.pprofession}
              descriptionPl={this.state.descriptionPl}
              contractors={this.state.contractors}
              burgerChoice={this.state.burgerChoice}
            />
          </div>
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
            <UserInfo />
            <Button />
          </AppContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
