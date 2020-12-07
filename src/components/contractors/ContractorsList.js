import React from 'react';

const ContractorsList = () => {
  const paper = (
    <div className='paper'>
      <div className='paper__main'>
        <div className='paper__pattern'>
          <div className='paper__content'>notatki notatki notatki</div>
          <div className='paper__content'>notatki notatki notatki</div>
          <div className='paper__content'>notatki notatki notatki</div>
          <div className='paper__content'>notatki notatki notatki</div>
        </div>
      </div>
      <div className='paper__margin'></div>
    </div>
  );

  return (
    <section className='contractors-list'>
      <div className='contractors-list__wrapper'>
        {/* <h2 className='contractors-list__title'>Lista wykonawców: 87 </h2> */}

        {paper}
      </div>
    </section>
  );
};

export default ContractorsList;
