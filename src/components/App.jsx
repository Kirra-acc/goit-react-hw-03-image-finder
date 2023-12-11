import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { getPhotos } from 'Services/Services';
import { Button } from './Button/Button';

export class App extends React.Component {
  state = {
    imagesData: [],
    userInput: 'strawberry',
    page: 1,
  };
  async componentDidMount() {
    try {
      const images = await getPhotos(this.state.userInput, this.state.page);
      console.log(images);
      this.setState({ imagesData: [...images.hits] });
    } catch (error) {
      console.log(error);
    }
  }
  async componentDidUpdate(_, prevState) {
    if (
      this.state.userInput !== prevState.userInput ||
      prevState.page !== this.state.page
    ) {
      try {
        const images = await getPhotos(this.state.userInput, this.state.page);
        console.log(images);
        this.setState(prevState => ({
          imagesData: [...prevState.imagesData, ...images.hits],
        }));
      } catch (error) {
        console.log(error);
      }
    }
  }
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery imagesData={this.state.imagesData} />
        <ImageGalleryItem />
        <Button updatePage={this.handleLoadMore} />
      </div>
    );
  }
}
