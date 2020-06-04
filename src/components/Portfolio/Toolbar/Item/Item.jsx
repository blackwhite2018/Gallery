import React from 'react';
import PropTypes from 'prop-types';
import './item.css';

const Item = ({ filterName, selected, onSelectFilter }) => {
    const handleSelectFilter = () => {
        onSelectFilter(filterName);
    };

    return (
        <button
            className={`filter__item ${selected ? 'filter__item--active' : ''}`}
            onClick={ handleSelectFilter }
        >{ filterName }</button>
    );
};

Item.propTypes = {
    props: PropTypes.shape({
        filterName: PropTypes.string,
        selected: PropTypes.string,
        onSelectFilter: PropTypes.func.isRequired
    })
};

export default Item;

