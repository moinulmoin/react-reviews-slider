/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import Reviews from '../data';

const Slider = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = Reviews[index];

    const checkNumber = (num) => {
        if (num > Reviews.length - 1) {
            return 0;
        }
        if (num < 0) {
            return Reviews.length - 1;
        }
        return num;
    };

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    const handleClick = () => {
        const randomReview = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * Reviews.length);
            if (randomNumber === index) {
                randomNumber = index + 1;
            }
            setIndex(checkNumber(randomNumber));
        }, 100);
        setTimeout(() => {
            clearInterval(randomReview);
        }, 1000);
    };

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" type="button" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" type="button" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
                <button className="random-btn" type="button" onClick={handleClick}>
                    Random Review
                </button>
            </div>
        </article>
    );
};

export default Slider;
