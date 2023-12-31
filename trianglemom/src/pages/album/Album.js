// import LightGallery from 'lightgallery/react';
import Header from '../../components/header/Header.js';
import './Album.css';
import Gallery from 'react-photo-gallery';

const images = [
    { src: "./images/dog1.jpg", width: 1, height: 1 },
    { src: "./images/dog2.jpg", width: 1, height: 2 },
    { src: "./images/dog3.jpg", width: 1, height: 1 },
    { src: "./images/dog4.jpg", width: 1, height: 1 },
    { src: "./images/dog5.jpg", width: 1, height: 1 },
    { src: "./images/dog6.jpg", width: 1, height: 1 },
    { src: "./images/dog7.jpg", width: 1, height: 1 },
    { src: "./images/dog8.jpg", width: 1, height: 2 },
    { src: "./images/dog9.jpg", width: 1, height: 1 },
    { src: "./images/dog10.jpg", width: 1, height: 1 },
]

function Album() {
    return (
        <div id="gallery-container">
            <Header>Explore The Gallery</Header>
            <Gallery photos={images}/>
        </div>
    );
}

export default Album;