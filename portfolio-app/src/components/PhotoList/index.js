import React, { useState } from 'react';

const PhotoList = ({ category }) => {
    const [photos] = useState([
        {
            name: 'ShowGo',
            category: 'portfolio',
            description:
                'Project 1'
        },
        {
            name: 'Upgrad',
            category: 'portfolio',
            description:
                'Project 2'
        },
        {
            name: 'Weather App',
            category: 'portfolio',
            description:
                'Shows a 5 day forecast, city of your choosing'
        },
        {
            name: 'Work Day Scheduler',
            category: 'portfolio',
            description:
                'Easily schedule your day with this daily planner'
        },
        {
            name: 'Note taker',
            category: 'portfolio',
            description:
                'Keep track of all your thoughts with this note keeper application'
        },
        {
            name: 'Team Generator',
            category: 'portfolio',
            description:
                'Use the comand line to create and organize your organizations structure'
        },
    ]);

    const currentPhotos = photos.filter(photo => photo.category === category);
    return (
        <div>
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../../src/assets/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoList;
