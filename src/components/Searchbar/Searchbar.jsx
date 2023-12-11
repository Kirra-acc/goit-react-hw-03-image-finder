import React from 'react';
import s from './Searchbar.module.css';

export const Searchbar = ({
    onSubmit
}) => {
  return (
    <>
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={onSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.buttonLabel}>Search</span>
          </button>

          <input
            name="input"
            className={s.input}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};
