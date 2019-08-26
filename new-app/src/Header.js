import React from 'react';

const Header = () => {
    return(
        //for my header I want a Home and Body of Work
        <div class="ui three item menu">
            <a class="item">Contact and About Me</a>
            <a class="item active">Projects</a>
            <a class="item">Upcoming Events</a>
        </div>

    );
};

export default Header