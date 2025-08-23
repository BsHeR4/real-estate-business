// src/hooks/useScrollToHash.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const hash = location.hash;

            if (hash) {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }, 0);
    }, [location]);
}

export default useScrollToHash;