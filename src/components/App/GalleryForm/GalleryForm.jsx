import axios from 'axios';
import {useState} from 'react';
import './GalleryForm.css';

function GalleryForm({getGallery}) {
    const [pathIn, setPathIn] = useState('');
    const [descIn, setDescIn] = useState('');

    const [clicked, setClicked] = useState(false);

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

    const [style, setStyle] = useState('gallery-form2');
    const [style2, setStyle2] = useState('down2');

    function changeStyle () {
        setClicked(!clicked);
        if(clicked) {
            setStyle('gallery-form');
            setStyle2('down');
        }
        else {
            setStyle('gallery-form2');
            setStyle2('down2');
        }
    }

    return (
        <>
        <div className={style}>
            <form className="item-form" onSubmit={addItem}>
                <div>
                    <label htmlFor="path-input">URL </label>
                    <input value={pathIn} onChange={evt => setPathIn(evt.target.value)} id="path-input" type="text" required/>
                </div>
                <div>
                    <label htmlFor="description-input">Description </label>
                    <input value={descIn} onChange={evt => setDescIn(evt.target.value)} id="description-input" type="text" required/>
                </div>
                <div className="break"></div>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div onClick={() => changeStyle()} className={style2}>{'\u2304'}</div>
        </>
    );
}

export default GalleryForm;