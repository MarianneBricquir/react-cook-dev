import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/*Les images importées depuis la balise IMG sont accessibles dans "public" */}
            <h1 className="h1-logo">React cooking</h1>
        </div>
    );
};

export default Logo;