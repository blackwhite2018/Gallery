import React from 'react';
import PropTypes from 'prop-types';
import './projectList.css';
import Item from './Item/Item';

const ProjectList = ({ listProjects }) => (
    <div className="project-list">
        {
            listProjects.map((project, index) => (
                <Item
                    key={ index }
                    img={ project.img }                            
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
