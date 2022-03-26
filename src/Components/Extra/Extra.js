import React from 'react';
import './Extra.css'

const Extra = () => {
    return (
        <div className='extra'>
            <div>
                <h2>How React Works?</h2>
                <h5> <b>Ans:</b> React is a JavaScript library .It works in declarative code in each line.We use declarative code to create components.Essentially, components are reusable UIs which allow you to split the app into separate blocks that act independently of each other.Declaration code is easy to understand, easy to change and has fewer bugs.
                </h5>
            </div>
            <div>
                <h2>Props vs State</h2>
                <h5><b>Ans: Props are used to pass data from one component to another.The state are not used to pass data from one component.The state is a local data storage. State are variables that react will react , updating the UI when values changes.We can also send an array or a function as props.</b></h5>
            </div>
        </div>
    );
};

export default Extra;