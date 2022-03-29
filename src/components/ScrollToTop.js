import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//This component resets the window to 0, 0 when a new view is loaded, i.e., each new view will load at the top rather than the middle of the page.

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return(
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
};

export default ScrollToTop;
