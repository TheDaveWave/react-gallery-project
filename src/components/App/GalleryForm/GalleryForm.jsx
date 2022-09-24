function GalleryForm() {
    return (
        <div className="gallery-form">
            <form>
                <label htmlFor="path-input">URL </label>
                <input id="path-input" type="text" required/>
                <label htmlFor="description-input">Description </label>
                <input id="description-input" type="text" required/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default GalleryForm;