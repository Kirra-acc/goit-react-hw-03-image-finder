import React from 'react';
import s from './Button.module.css';

export const Button = ({
    updatePage
}) => {
  return (
    <>
      <button className={s.moreBtn} type='button' onClick={updatePage}>Load More</button>
    </>
  );
};
