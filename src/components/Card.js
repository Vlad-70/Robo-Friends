import React, {Fragment} from 'react';

const Card = ({ id, name, email }) => {

  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?size=200x200`} alt='card'/>
      <Fragment>
        <h2>{name}</h2>
        <p>{email}</p>
      </Fragment>
    </div>
  );
}

export default Card;
