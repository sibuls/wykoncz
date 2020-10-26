import React, { Component } from 'react';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import contractors from './data/contractors.js';
import professions from './data/professions.js';
import Burger from './components/burger/Burger';
import House from './components/house/House';
import Header from './components/header/Header';
import ContractorsList from './components/contractors/ContractorsList';
import './sass/style.scss';

class App extends Component {
  state = {
    isBurgerActive: true,
    professions: [],
    profession: '',
    descriptionPl: '',
    // dotTint: '',
    pprofession: '',
    contractors: [],
  };

  changeProfession = (en, pl) => {
    const profession = en;
    const descriptionPl = pl;

    this.setState((prevstate) => ({
      profession,
      pprofession: prevstate.profession,
      descriptionPl,
      isMenuActive: true,
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
    console.log('burger has been clicked');
  };

  render() {
    return (
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
          <Menu
            professions={this.state.professions}
            profession={this.state.profession}
            // pprofession={this.state.pprofession}
            descriptionPl={this.state.descriptionPl}
            contractors={this.state.contractors}
          />
          <ContractorsList />
        </div>
        <Burger
          isBurgerActive={this.state.isBurgerActive}
          burgerChange={this.burgerChange}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
