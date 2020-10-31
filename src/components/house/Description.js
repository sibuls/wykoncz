import React, { PureComponent } from 'react';

class Description extends PureComponent {
  render() {
    return (
      <p
        className={`description  description--${this.props.descriptionEn} ${
          this.props.profession === this.props.descriptionEn
            ? `description-active`
            : null
        } `}
        onClick={() =>
          this.props.changeProfession(
            this.props.descriptionEn,
            this.props.descriptionPl,
            'menuList'
          )
        }
      >
        {this.props.descriptionPl}
      </p>
    );
  }
}

export default Description;
