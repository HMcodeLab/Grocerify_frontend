import grocery from '../Assets/Images/groceries_hero.png'
import grocery2 from '../Assets/Images/grocery2.png'
import electronics from '../Assets/Images/electronics.jpg'
import electronics2 from '../Assets/Images/electronicsBanner.png'
import beauty from '../Assets/Images/beauty.png'
import beauty2 from '../Assets/Images/beautyBanner.png'
import dairy from '../Assets/Images/dairy_hero.png'
import dairy2 from '../Assets/Images/dairyBanner.png'
import frozen from '../Assets/Images/frozen_hero.png'
import frozen2 from '../Assets/Images/frozenBanner.png'
import poultry from '../Assets/Images/poultryBanner.png'
import poultry2 from '../Assets/Images/poultary_hero.png'

export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};


export const getCategoryBanner = (cat) => {
    if (cat == 'Grocery') {
        return [grocery, grocery2];
    }
    if (cat == 'Electronics') {
        return [electronics, electronics2];
    }
    if (cat == 'Health and Beauty') {
        return [beauty, beauty2];
    }
    if (cat == 'dairy') {
        return [dairy, dairy2];
    }
    if (cat == 'frozen') {
        return [frozen, frozen2];
    }
    if (cat == 'poultary') {
        return [poultry, poultry2];
    }

}