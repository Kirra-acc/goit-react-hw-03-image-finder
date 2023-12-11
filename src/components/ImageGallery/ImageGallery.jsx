import React from 'react';
import s from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imagesData }) => {
  return (
    <>
      <ul className={s.gallery}>
        {imagesData.map(item => (
          <ImageGalleryItem {...item} key={item.id} />
        ))}
      </ul>
    </>
  );
};
