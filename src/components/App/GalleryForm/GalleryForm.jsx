import axios from 'axios';
import {useState} from 'react';

function GalleryForm({getGallery}) {
    const [pathIn, setPathIn] = useState('');
    const [descIn, setDescIn] = useState('');

    // POST route
    const addItem = () => {
        console.log('In axios POST');
        axios({
            method: 'POST',
            url: '/gallery',
            data: {
                path: pathIn,
                description: descIn,
            }
        })
        .then(() => {
            console.log('Successfully posted new item');
            // refresh the gallery.
            getGallery()
        })
        .catch(err => {
            console.log('Error in axios POST', err);
        });
    }

    return (
        <div className="gallery-form">
            <form onSubmit={addItem}>
                <label htmlFor="path-input">URL </label>
                <input value={pathIn} onChange={evt => setPathIn(evt.target.value)} id="path-input" type="text" required/>
                <label htmlFor="description-input">Description </label>
                <input value={descIn} onChange={evt => setDescIn(evt.target.value)} id="description-input" type="text" required/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default GalleryForm;