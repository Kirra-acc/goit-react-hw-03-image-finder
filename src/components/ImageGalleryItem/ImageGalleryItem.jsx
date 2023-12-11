import React from 'react';
import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  openModal,
}) => {
  return (
    <>
      <li className={s.galleryItem}>
        <img src={webformatURL} alt="photo" id={id} />
      </li>
    </>
  );
};
