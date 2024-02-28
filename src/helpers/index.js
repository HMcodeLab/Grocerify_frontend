import grocery from '../Assets/Images/groceries_hero.png'
import electronics from '../Assets/Images/electronics.jpg'
import beauty from '../Assets/Images/beauty.png'
import dairy from '../Assets/Images/dairy_hero.png'
import frozen from '../Assets/Images/frozen_hero.png'

export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};


export const getCategoryBanner = (cat) => {
    if (cat == 'Grocery') {
        return grocery;
    }
    if (cat == 'Electronics') {
        return electronics;
    }
    if (cat == 'Health and Beauty') {
        return beauty;
    }
    if (cat == 'dairy') {
        return dairy;
    }
    if (cat == 'frozen') {
        return frozen;
    }
    if (cat == 'poultary') {
        return frozen;
    }

}