import React from 'react';

class Burger extends React.Component {
  state = {
    burgerClassName: 'burger__span',
  };

  listenScrollEvent = (e) => {
    console.log('listencrol aktywowany');
    if (window.scrollY > 30) {
      console.log('listencrol poszedl w dol 400px');

      this.setState({ burgerClassName: 'burger__span burger__span--dark' });
    } else {
      this.setState({ burgerClassName: 'burger__span' });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
    console.log('burger zamontowany');
  }

  handleSearch = () => console.log('handle search klik');

  render() {
    return (
      <div
        className='burger'
        onClick={() => this.props.burgerChange()}
        active={this.props.active}
      >
        <nav role='navigation'>
          <div className='burger__menu-toggle'>
            <input type='checkbox' className='burger__input' />

            <span className={this.state.burgerClassName}></span>
            <span className={this.state.burgerClassName}></span>
            <span className={this.state.burgerClassName}></span>

            <ul className='burger__menu'>
              <a href='#' className='burger__link'>
                <li className='burger__li'>Login</li>
              </a>
              <a href='#' className='burger__link'>
                <li className='burger__li'>Rejestracja</li>
              </a>

              <a
                href='#'
                className='burger__link'
                onClick={() => this.props.changeProfession('')}
              >
                <li className='burger__li burger__li--search'>
                  Szukaj
                  <i className='fas fa-search burger__search-ico '></i>{' '}
                  wykonawcy
                </li>
              </a>
              <a
                href='https://www.google.com/'
                target='_blank'
                className='burger__link'
              >
                <li className='burger__li'>Złóż ofertę</li>
              </a>
              <a
                href='https://www.google.com/'
                target='_blank'
                className='burger__link'
              >
                <li className='burger__li'>Działy </li>
              </a>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Burger;
