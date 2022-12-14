import React, {useState} from "react";
import axios from "axios";
import './GalleryItem.css';
import swal from "sweetalert";

function GalleryItem ({item, getGallery}) {
    const [togglePic, setToggle] = useState(false);

    const updateLikes = (itemId) => {
        console.log(`In axios PUT route /gallery/like/${itemId}`)
        axios.put(`/gallery/like/${itemId}`)
        .then(() => {
            // refesh the gallery items.
            getGallery();
        })
        .catch(err => {
            console.log('Erroring in updating likes', err);
        });
    }

    const deleteItem = (itemId) => {
        // using sweetalert to confirm delete.
        swal({
            title: 'Are you sure?',
            text: 'Once deleted it will be lost forever.',
            buttons: true,
            dangerMode: true
        })
        .then(ok => {
            if(ok){
                console.log(`In axios DELETE /gallery/${itemId}`);
                axios.delete(`/gallery/${itemId}`)
                .then(() => {
                    // refresh the gallery.
                    getGallery();
                })
                .catch(err => {
                    console.log('Error in deleting item', err);
                });
            }
        });
    }

    // icon for a thumbs up.
    const thumbsUp = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"/>
        <path d="M32,104H80a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V112A8,8,0,0,1,32,104Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
        <path d="M80,104l40-80a32,32,0,0,1,32,32V80h61.9a15.9,15.9,0,0,1,15.8,18l-12,96a16,16,0,0,1-15.8,14H80" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
    </svg>);


    return (
        <div className="gallery-item">
            <div className="display" onClick={() => {setToggle(!togglePic)}}>
                {togglePic ? 
                <p>{item.description}</p> :
                <img src={item.path} alt="gallery item"/>}
            </div>
            <div className="display-banner">
                <button onClick={() => updateLikes(item.id)}>{thumbsUp}</button>
                <button onClick={() => deleteItem(item.id)}>X</button>
                <p>{item.likes === 0 ? 'No people like' : item.likes===1 ? `${item.likes} person likes` : `${item.likes} people like`} this!</p>
            </div>
        </div>
    );
}

export default GalleryItem;