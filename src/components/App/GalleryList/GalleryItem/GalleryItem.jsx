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

    return (
        <div className="gallery-item">
            <div className="display" onClick={() => {setToggle(!togglePic)}}>
                {togglePic ? 
                <p>{item.description}</p> :
                <img src={item.path} alt="gallery item"/>}
            </div>
            <div className="display-banner">
                <button onClick={() => updateLikes(item.id)}>{'\u2713'}</button>
                <button onClick={() => deleteItem(item.id)}>X</button>
                <p>{item.likes === 0 ? 'No people like' : item.likes===1 ? `${item.likes} person likes` : `${item.likes} people like`} this!</p>
            </div>
        </div>
    );
}

export default GalleryItem;