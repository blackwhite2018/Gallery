import React from 'react';
import PropTypes from 'prop-types';
import './projectList.css';
import Item from './Item/Item';

const ProjectList = ({ listProjects }) => (
    <div className="project-list">
        {
            listProjects.map(({ img }, index) => (
                <Item
                    key={ index }
                    img={ img }                            
                />)
            )
        }
    </div>
);

ProjectList.propTypes = {
    props: PropTypes.shape({
        listProjects: PropTypes.array
    })
};

export default ProjectList;
