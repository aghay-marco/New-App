import React from 'react';
import PropTypes from 'prop-types';

const Welcome = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

const Website = (props) => {
    return (
        <div>
            <Welcome>
                <h1>reactapp.ir</h1>
                <h2> Test</h2>
            </Welcome>
            <p onClick={props.handler} >my name is {props.name} , I have  {props.age} years old</p>
        </div>
    )
}

export default Website;

Website.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
    handler: PropTypes.func
}

Website.defaultProps = {
    name: 'ahmad',
}

