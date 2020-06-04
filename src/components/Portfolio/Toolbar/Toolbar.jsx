import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item/Item';
import './toolbar.css';

const Toolbar = ({ filterNames, selected, onSelectFilter }) => (
    <div className="filter">
        {
            filterNames.map((filterName, index) => (
                <Item 
                    key={ index }
                    filterName={ filterName }
                    selected={ filterName === selected ? true : false }
                    onSelectFilter={ onSelectFilter }
                />)
            )
        } 
    </div>
);

Toolbar.propTypes = {
    props: PropTypes.shape({
        filterNames: PropTypes.array,
        selected: PropTypes.string,
        onSelectFilter: PropTypes.func.isRequired
    })
};

export default Toolbar;

