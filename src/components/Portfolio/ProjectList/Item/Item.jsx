import React from 'react';
import PropTypes from 'prop-types';
import './item.css';

const Item = ({ img }) => (
    <figure className="project-list__box">
        <img
            className="project-list__img"
            src={ `https://blackwhite2018.github.io/Gallery/img/${ img }` }
            alt={ img.replace(/\..+/, '') }
        />
    </figure>
);

Item.propTypes = {
    props: PropTypes.shape({
        img: PropTypes.string
    })
};

export default Item;

