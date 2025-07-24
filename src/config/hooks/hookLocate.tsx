import { useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

export function useScroll() {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.slice(1));
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }, 0);
                setTimeout(()=>{
                    navigate(location.pathname, { replace: true });
                },600)
            }
        }
    }, [location]);
}