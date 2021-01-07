import React from 'react';
import {Carousel as Car} from "react-bootstrap";

const Carousel = (props) => {
    return (
        <Car nextLabel='Следующий'>
            <Car.Item>
                <img
                    src="http://safelme.com/wp-content/uploads/2016/06/03-min.png"
                    className='d-block w-100' alt='First slide' />
                <Car.Caption>
                    <h3>
                        First slide label
                    </h3>
                    <p>
                        something
                    </p>
                </Car.Caption>
            </Car.Item><Car.Item>
            <img
                src='http://safelme.com/wp-content/uploads/2016/06/03-min.png'
                className='d-block w-100'  alt='Second slide' />
            <Car.Caption>
                <h3>
                    Second slide label
                </h3>
                <p>
                    something
                </p>
            </Car.Caption>
        </Car.Item><Car.Item>
            <img
                src='http://safelme.com/wp-content/uploads/2016/06/03-min.png'
                className='d-block w-100' alt='Third slide' />
            <Car.Caption>
                <h3>
                    Third slide label
                </h3>
                <p>
                    something
                </p>
            </Car.Caption>
        </Car.Item>
        </Car>
    );
};

export default Carousel;