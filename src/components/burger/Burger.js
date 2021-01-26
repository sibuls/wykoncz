import React from 'react';

class Burger extends React.Component {
  state = {
    burgerSpanName: 'burger__span',
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 30) {
      this.setState({ burgerSpanName: 'burger__span burger__span--dark' });
    } else {
      this.setState({ burgerSpanName: 'burger__span' });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  render() {
    return (
      <div
        className='burger wide'
        onClick={() => this.props.burgerChange()}
        active={this.props.active}
      >
        <nav role='navigation'>
          <div className='burger__menu-toggle'>
            <input type='checkbox' className='burger__input' />

            <span className={this.state.burgerSpanName}></span>
            <span className={this.state.burgerSpanName}></span>
            <span className={this.state.burgerSpanName}></span>

            <ul className='burger__menu'>
              <a
                href='#'
                className='burger__link  burger__link--login  '
                onClick={() => this.props.burgerChoice('login')}
              >
                <li className='burger__li  burger__li--login '>Moje konto</li>
              </a>

              <a
                href='#'
                className='burger__link'
                // onClick={() => this.props.changeProfession('')}
                onClick={() => this.props.burgerChoice('search')}
              >
                <li className='burger__li burger__li--search'>
                  Szukaj
                  <i className='fas fa-search burger__search-ico '></i>{' '}
                  wykonawcy
                </li>
              </a>
              <a
                className='burger__link'
                onClick={() => this.props.burgerChoice('advertisment')}
              >
                <li className='burger__li'>Złóż ofertę</li>
              </a>
              <a
                className='burger__link'
                onClick={() => this.props.burgerChoice('professions')}
              >
                <li className='burger__li'>Wizytówka</li>
              </a>
              <div className='burger__triangle'></div>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Burger;
