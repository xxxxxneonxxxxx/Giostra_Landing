import { useEffect,useRef } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

export function useScroll() {
    const location = useLocation();
    const firstLoad = useRef(true);
    const navigate = useNavigate();
    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.slice(1));
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                setTimeout(()=>{
                    navigate(location.pathname, { replace: true });
                },600)
            }
        }
    }, [location]);
}