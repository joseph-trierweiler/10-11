import React from 'react';
import Card from '../card/Card'
import styles from './menu.module.css';
import jsonData from '../../assets/data/menu.json'


const Menu = () =>{
let menuSection = []

    for (const items in jsonData){
        let menuCard = [];
        menuSection.push(
                <h2 className={styles.section_title} key={items}>
                    {items}
                </h2>
        )
        
        let menuList = jsonData[items]
        menuList.map(({id,title, image, description, price})  => {
            menuCard.push( <Card 
            key={id} 
            title ={title}
            image ={image}
            description ={description}
            price ={price}
            />
            )
        })
        menuSection.push(<div className={styles.cards}>{menuCard}</div>)
    }
    
    return menuSection
        
}

export default Menu