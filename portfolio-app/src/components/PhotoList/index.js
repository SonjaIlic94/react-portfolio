import React, { useState } from 'react';

const PhotoList = ({ category }) => {
    const [photos] = useState([
        {
            name: 'ShowGo',
            category: 'portfolio',
            description: 'Project 1',
            link: 'https://sonjaIlic94.github.io/ShowGo/'

        },
        {
            name: 'Upgrad',
            category: 'portfolio',
            description:
                'Project 2',
            link: "https://www.google.com"
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

    const currentPhotos = photos.filter(photo => photo.name === photo.name);
    console.log(currentPhotos);
    return (
        <div>
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    < a href={image.link}>
                        <img
                            src={require(`../../../src/assets/${image.category}/${i}.jpg`)}
                            alt={image.name}
                            className="img-thumbnail mx-1"
                            key={image.name}
                        /></a>
                ))}
            </div>
        </div>
    );
};

export default PhotoList;
