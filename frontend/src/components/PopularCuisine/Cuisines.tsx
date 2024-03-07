import React, { MouseEvent } from 'react';
import { Link } from "react-router-dom";
import Styles from "./Styles/Popularcuisine.module.css";
import biryaniImg from './Images/biriyani1-img.png';
import pizza from './Images/pizza-img.png';
import burger from './Images/burgur-img.png';
import cakeDessert from './Images/cakeDessert-img.png';
import north from './Images/northIndian-img.png';
import south from './Images/southIndian-img.png';
import roll from './Images/rolls-img.png';
import iceCream from './Images/iceCream-img.png';

const PopularCuisine: React.FC = () => {
    const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, customProp: string) => {
         window.location.href = `/search?q=${customProp}`;
      };
    return (
        <div className={Styles.container}>
            <div className={Styles.popular_cuisines}>Popular Cuisines</div>
            <div className={Styles.grid_container}>
                <Link to={`/search?q=${"biryani"}`} onClick={(event) => handleLinkClick(event, 'biryani')}>
                    <img src={biryaniImg} alt='Biryani'  />
                </Link>
                <Link to={`/search?q=${"Pizza"}`}  onClick={(event) => handleLinkClick(event, 'Pizza')} >
                    <img src={pizza} alt='Pizza' />
                </Link>
                <Link to={`/search?q=${"Burger"}`}  onClick={(event) => handleLinkClick(event, 'Burger')}>
                    <img src={burger} alt='Burger' />
                </Link>
                <Link to={`/search?q=${"Cake Dessert"}`}  onClick={(event) => handleLinkClick(event, 'Cake Dessert')}>
                    <img src={cakeDessert} alt='Cake Dessert' />
                </Link>
                <Link to={`/search?q=${"North Indian"}`}  onClick={(event) => handleLinkClick(event, 'North Indian')}>
                    <img src={north} alt='North Indian' />
                </Link>
                <Link to={`/search?q=${"South Indian"}`}  onClick={(event) => handleLinkClick(event, 'South Indian')}>
                    <img src={south} alt='South Indian' />
                </Link>
                <Link to={`/search?q=${"Roll"}`}  onClick={(event) => handleLinkClick(event, 'Roll')}>
                    <img src={roll} alt='Roll' />
                </Link>
                <Link to={`/search?q=${"Ice Cream"}`}  onClick={(event) => handleLinkClick(event, 'Ice Cream')}>
                    <img src={iceCream} alt='Ice Cream' />
                </Link>
            </div>
        </div>
    );
};

export default PopularCuisine;
