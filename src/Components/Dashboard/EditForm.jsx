import React, {useState} from 'react';
import './EditForm.css'
import {CiSaveDown1} from "react-icons/ci";
import {FaRegFileImage} from "react-icons/fa";
import {IoMdCloseCircle} from "react-icons/io";

const EditForm = ({item, onSave, onClose}) => {
    const [title, setTitle] = useState(item.title);
    const [icon, setIcon] = useState(item.icon);

    const handleFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setIcon(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        onSave(item.id, title, icon);
        onClose();
    };

    return (
        <div className="mk-dash-edit-form">
            {icon && <img src={icon} alt="preview" className="mk-preview" />}
            <div className='mk-inputs-row'>
                <input
                    className="mk-input-container"
                    type="text"
                    placeholder="Enter title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label className="mk-file-label">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFile}
                        className="mk-file-input"
                    />
                    <FaRegFileImage /> Choose File
                </label>
            </div>
            <div className="mk-actions">
                <button onClick={handleSubmit} className="mk-btn edit">
                    <CiSaveDown1 /> Save
                </button>
                <button onClick={onClose} className="mk-btn close">
                    <IoMdCloseCircle /> Close
                </button>
            </div>
        </div>
    );
};

export default EditForm;
