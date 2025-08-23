import {createContext, useContext, useEffect, useState} from "react";

const ItemsContext = createContext();

export const useItems = () => {
    return useContext(ItemsContext);
}

export const ItemsProvider = ({ children, initialItems = []}) => {
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            return JSON.parse(storedItems);
        }
        return initialItems;
    });


    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
        }, [items]);

    const addItem = (newItem) => {
        setItems((oldItems) => [...oldItems, newItem]);
    };

    const  deleteItem  = (id) => {
        setItems((oldItems) => oldItems.filter(item => item.id !== id));
    }

    const updateItem = (id, newTitle, newIcon) => {
        setItems((oldItems) =>
            oldItems.map((item) =>
                item.id === id ? { ...item, title: newTitle, icon: newIcon } : item
            )
        );
    };

    const value = {
        items,
        addItem,
        deleteItem,
        updateItem
    }

    return (
        <ItemsContext.Provider value={value}>
            {children}
        </ItemsContext.Provider>
    );
}