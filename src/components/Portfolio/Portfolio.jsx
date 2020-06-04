import React, { useState } from 'react';
import ProjectList from './ProjectList/ProjectList';
import Toolbar from './Toolbar/Toolbar';
import './portfolio.css';

const Portfolio = () => {
    const [filters, setFilter] = useState(["All", "Websites", "Flayers", "Business Cards"]);
    const [selectedFilters, setSelectedFilters] = useState('All');
    const [listProjects, setListProjects] = useState([
        {
            img: "mon.jpg",
            category: "Business Cards"
        },
        {
            img: "200.jpg",
            category: "Websites"
        },
        {
            img: "emi_haze.jpg",
            category: "Websites"
        },
        {
            img: "codystretch.jpg",
            category: "Websites"
        },
        {
            img: "Triangle_003.jpg",
            category: "Business Cards"
        },
        {
            img: "place200x290.png",
            category: "Websites"
        },
        {
            img: "200.jpg",
            category: "Websites"
        },
        {
            img: "transmission.jpg",
            category: "Business Cards"
        },
        {
            img: "place200x290_1.png",
            category: "Websites"
        },
        {
            img: "place200x290_2.png",
            category: "Flayers"
        },
        {
            img: "the_ninetys_brand.jpg",
            category: "Websites"
        },
        {
            img: "dia.jpg",
            category: "Business Cards"
        },
        {
            img: "Triangle_350x197.jpg",
            category: "Websites"
        },
        {
            img: "emi_haze.jpg",
            category: "Websites"
        },
        {
            img: "transmission.jpg",
            category: "Business Cards"
        },
        {
            img: "Triangle_350x197_1.jpg",
            category: "Websites"
        },
        {
            img: "place200x290_3.png",
            category: "Flayers"
        }
    ]);

    const [filterList, setFilterList] = useState(listProjects.filter(project => project.category === selectedFilters));

    const handleSelectFilter = filterName => {
        setSelectedFilters(prevSelectedFilter => filterName);
        setFilterList(prevFilters => listProjects.filter(project => project.category === filterName));
    };

    return (
        <div className="portfolio">
            <Toolbar
                filterNames={ filters }
                selected={ selectedFilters }
                onSelectFilter={ handleSelectFilter }
            />
            <ProjectList
                listProjects={ selectedFilters === 'All' ? listProjects : filterList }
            />
        </div>
    )
};

export default Portfolio;
