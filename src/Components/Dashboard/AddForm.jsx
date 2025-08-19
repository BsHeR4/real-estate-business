import React, {useState} from 'react';
import {FaPlus, FaRegFileImage} from "react-icons/fa";
import './AddForm.css'
import {IoMdCloseCircle} from "react-icons/io";

const AddForm = ({onSave, onClose}) => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState(null);

    const handleFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setIcon(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        if (!title || !icon) return;
        onSave({ id: Date.now(), title, icon });
        setTitle("");
        setIcon(null);
        onClose();
    };

    return (
        <div className="mk-dash-add-form">
            {icon && <img src={icon} alt="preview" className="mk-preview" />}
            <div className="mk-inputs-row">
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
                <button onClick={handleSubmit} className="mk-btn add">
                    <FaPlus /> Add
                </button>
                <button className="mk-btn close" onClick={onClose}>
                    <IoMdCloseCircle /> Close
                </button>
            </div>
        </div>
    );
};

export default AddForm;
