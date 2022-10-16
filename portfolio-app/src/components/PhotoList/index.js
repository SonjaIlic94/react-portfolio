import React, { useState } from 'react';

const PhotoList = ({ category }) => {
    const [photos] = useState([
        {
            name: 'ShowGo',
            category: 'portfolio',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Upgrad',
            category: 'portfolio',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Weather App',
            category: 'portfolio',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        // {
        //     name: 'proj 4',
        //     category: 'Portfolio',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        // },
        // {
        //     name: 'Proj 5',
        //     category: 'portfolio',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        // },
        // {
        //     name: 'Proj 6',
        //     category: 'portfolio',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        // },
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
