import React, { useState } from 'react';

const PhotoList = ({ }) => {
    const [photos] = useState([
        {
            name: 'ShowGo',
            category: 'portfolio',
            description: 'Find events in your city with your Spotify Username.  ',
            link: 'https://sonjaIlic94.github.io/ShowGo/'

        },
        {
            name: 'Upgrad',
            category: 'portfolio',
            description:
                'Connect with other grad students',
            link: "https://fathomless-scrubland-35301.herokuapp.com/"
        },
        {
            name: 'Weather App',
            category: 'portfolio',
            description:
                'Shows a 5 day forecast, city of your choosing',
            link: 'https://sonjailic94.github.io/Weather-Dashboard/'
        },
        {
            name: 'Work Day Scheduler',
            category: 'portfolio',
            description:
                'Easily schedule your day with this daily planner',
            link: 'https://sonjailic94.github.io/work-day-scheduler/'
        },
        {
            name: 'Note taker',
            category: 'portfolio',
            description:
                'Keep track of all your thoughts.',
            link: 'https://mysterious-crag-91476.herokuapp.com/'
        },
        {
            name: 'Team Generator',
            category: 'portfolio',
            description:
                'Use the command line to create a team.',
            link: 'https://sonjailic94.github.io/team-gen/ '
        },
        {
            name: 'Project 3',
            category: 'portfolio',
            description:
                'Rescue Chow.',
            link: 'https://boiling-depths-73128.herokuapp.com/ '
        },
    ]);

    const currentPhotos = photos.filter(photo => photo.name === photo.name);
    console.log(currentPhotos);
    return (
        <div>
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <p className='photo-container'>

                        <h1>{image.name}</h1>
                        <h6 className="photo-description"> {image.description}</h6>
                        < a href={image.link}>
                            <img
                                src={require(`../../../src/assets/${image.category}/${i}.jpg`)}
                                alt={image.name}
                                className="img-thumbnail mx-1"
                                key={image.name}
                            /></a>

                    </p>
                ))}
            </div>
        </div>
    );
};

export default PhotoList;
