import React from 'react';

class Burger extends React.Component {
  state = {
    color: '#dccdb8',
  };

  colorBackground = '#dccdb8';
  colorDark = '#290001';

  listenScrollEvent = (e) => {
    console.log('listencrol aktywowany');
    if (window.scrollY > 100) {
      console.log('listencrol poszedl w dol 400px');

      this.setState({ color: this.colorDark });
    } else {
      this.setState({ color: this.colorBackground });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
    console.log('burger zamontowany');
  }

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

            <span style={{ background: this.state.color }}></span>
            <span style={{ background: this.state.color }}></span>
            <span style={{ background: this.state.color }}></span>

            <ul className='burger__menu'>
              <a href='#' className='burger__link'>
                <li className='burger__li'>Login</li>
              </a>
              <a href='#' className='burger__link'>
                <li className='burger__li'>Rejestracja</li>
              </a>

              <a href='#' className='burger__link'>
                <li className='burger__li'>
                  Szukaj <i className='fas fa-search burger__search-ico '></i>
                </li>
              </a>
              <a
                href='https://erikterwan.com/'
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
