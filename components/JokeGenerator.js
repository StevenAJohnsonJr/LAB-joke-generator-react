import React from 'react';
import { PropTypes } from 'prop-types';

export default function Joker ({joke, btnText}) {
    return (
        <>
        <h1>{joke.setup}</h1>
        <p>{btnText}</p>
        </>
    )
}

Joker.PropTypes = {
    joke: PropTypes.shape({
        setup: PropTypes.string,
        punchline: PropTypes.string
    })
};

Joker.defualtProps = {
    joke: {
        setup: 'Defualt Setup',
        punchline: 'Defualt Punchline',
    },
    btnText: 'Get A Joke',

};