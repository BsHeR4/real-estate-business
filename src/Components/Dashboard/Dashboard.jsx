import React, {useState} from 'react';
import './Dashboard.css'
import EditForm from "./EditForm.jsx";
import AddForm from "./AddForm.jsx";
import {MdDelete} from "react-icons/md";
import {RxUpdate} from "react-icons/rx";
import {FaPlus} from "react-icons/fa";
import {useItems} from "../../context/ItemsContext.jsx";

const Dashboard = () => {
    const { items, addItem, deleteItem, updateItem } = useItems();

    const [showAddModal, setShowAddModal] = useState(false);
    const [editingItem, setEditingItem] = useState(null);

    return (
        <div className="mk-dashboard">
            <h1>Dashboard</h1>

            <button className="mk-btn add" onClick={() => setShowAddModal(true)}><FaPlus /> Add Item</button>

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
                                <button onClick={() => setEditingItem(item)} className="mk-btn edit"><RxUpdate /> Edit</button>
                                <button onClick={() => deleteItem(item.id)} className="mk-btn delete"><MdDelete /> Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {showAddModal && (
                <div className="mk-modal-overlay">
                    <div className="mk-modal-content">
                        <AddForm
                            onSave={addItem}
                            onClose={() => setShowAddModal(false)}
                        />
                    </div>
                </div>
            )}

            {editingItem && (
                <div className="mk-modal-overlay">
                    <div className="mk-modal-content">
                        <EditForm
                            item={editingItem}
                            onSave={updateItem}
                            onClose={() => setEditingItem(null)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
