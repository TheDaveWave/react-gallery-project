import React from 'react';
import GalleryItem from './GalleryItem/GalleryItem';
import './GalleryList.css';
function GalleryList({gallery, getGallery}) {
    return (
        <div className="gallery-container">
            <div className='gallery-list'>            
                {gallery.map( item => (
                    <GalleryItem
                        key={item.id}
                        item={item}
                        getGallery={getGallery}
                    />
                ))}      
            </div>
        </div>
    );
}

export default GalleryList;