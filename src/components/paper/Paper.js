import React from 'react';
import MenuContractors from '../menu/MenuContractors';

import contractors from '../../data/contractors.js';

const Paper = (props) => {
  // console.log(props);

  const paper = (
    <div className='paper'>
      <div className='paper__main'>
        <div className='paper__pattern'>
          <div className='paper__content'>
            <div className='menu-list'>
              {/* <h4 className='menu-list__title'>{props.descriptionPl}</h4> */}

              <img className='contractor__image' src={props.src} alt='' />

              <p className='contractor__name'> {props.name} - </p>

              <div className='menu-list__wrapper'>
                {/* <MenuContractors
                  contractors={props.contractors}
                  professions={props.professions}
                  profession={props.profession}
                  // pprofession={props.pprofession}
                  descriptionPl={props.descriptionPl}
                /> */}
              </div>
            </div>
          </div>
          {/* <div className='paper__content'>Żory 0600800987</div> */}
        </div>
      </div>
      <div className='paper__margin'></div>
      <div className='paper__triangle'></div>
    </div>
  );

  return <React.Fragment>{paper}</React.Fragment>;
};

export default Paper;
