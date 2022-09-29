import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/*Les images importées depuis la balise IMG sont accessibles dans "public" */}
            <img src="./logo-react-cook.png" alt="logo react" />
        </div>
    );
};

export default Logo;