import React, {useState} from "react";
import axios from "axios";
import './GalleryItem.css';
import swal from "sweetalert";

function GalleryItem ({item, getGallery}) {
    const [togglePic, setToggle] = useState(false);
    const [didLike, setDidLike] = useState(false);

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

        swal({
            title: 'Are you sure?',
            text: 'Once delete it will be lost forever.',
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

    // handle button click.
    const handleClick = (itemId) => {
        // call PUT request.
        updateLikes(itemId);
        // set didLike to true.
        setDidLike(true);
    }

    return (
        <div className="gallery-item">
            <div className="display" onClick={() => {setToggle(!togglePic)}}>
                {togglePic ? 
                <p>{item.description}</p> :
                <img src={item.path} alt="gallery item"/>}
            </div>
            <div className="display-banner">
                {didLike ? 
                <p>Liked</p> :
                <button onClick={() => handleClick(item.id)}>Like</button>}
                <button onClick={() => deleteItem(item.id)}>Delete</button>
                <p>{item.likes === 0 ? 'No people like' : item.likes===1 ? `${item.likes} person likes` : `${item.likes} people like`} this!</p>
            </div>
        </div>
    );
}

export default GalleryItem;