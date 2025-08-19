import React, {useEffect, useState} from 'react';
import './Dashboard.css'
import EditForm from "./EditForm.jsx";
import AddForm from "./AddForm.jsx";
import {MdDelete} from "react-icons/md";
import {RxUpdate} from "react-icons/rx";
import {FaPlus} from "react-icons/fa";

const Dashboard = () => {
    const [items, setItems] = useState([]);
    const [addItem, setAddItem] = useState(false);
    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        const storedItems = localStorage.getItem("items");
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    const handleAdd = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleDelete = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const handleUpdate = (id, newTitle, newIcon) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, title: newTitle, icon: newIcon } : item
            )
        );
    };

    return (
        <div className="mk-dashboard">
            <h1>Dashboard</h1>

            <button className="mk-btn add" onClick={() => setAddItem(true)}><FaPlus /> Add Item</button>

            <div className="mk-dash-cards">
                {items.length === 0 ? (
                    <p className="mk-no-items">
                        There's no items to display.
                    </p>
                ) : (
                    items.map((item) => (
                        <div className="mk-dash-card" key={item.id}>
                            <img src={item.icon} alt={item.title} />
                            <h3>{item.title}</h3>
                            <div className="mk-actions">
                                <button onClick={() => setEditItem(item)} className="mk-btn edit"><RxUpdate /> Edit</button>
                                <button onClick={() => handleDelete(item.id)} className="mk-btn delete"><MdDelete /> Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {addItem && (
                <div className="mk-modal-overlay">
                    <div className="mk-modal-content">
                        <AddForm
                            onSave={handleAdd}
                            onClose={() => setAddItem(false)}
                        />
                    </div>
                </div>
            )}

            {editItem && (
                <div className="mk-modal-overlay">
                    <div className="mk-modal-content">
                        <EditForm
                            item={editItem}
                            onSave={handleUpdate}
                            onClose={() => setEditItem(null)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
