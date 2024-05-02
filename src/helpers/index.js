import grocery from '../Assets/Images/groceryBanner.png';
import grocery2 from '../Assets/Images/grocery2.png'
import grocery3 from '../Assets/Images/groceryBanner4.png'
import electronics from '../Assets/Images/elecBanner2.png'
import electronics2 from '../Assets/Images/elecBanner.png'
import electronics3 from '../Assets/Images/elecBanner4.png'
import beauty from '../Assets/Images/beauty.png'
import beauty2 from '../Assets/Images/beautyBanner.png'
import beauty3 from '../Assets/Images/beautyBanner4.png'
import dairy2 from '../Assets/Images/dairyBanner3.png'
import dairy from '../Assets/Images/dairy_hero.png'
import dairy3 from '../Assets/Images/dairyBanner4.png'
import frozen from '../Assets/Images/frozen_hero.png'
import frozen2 from '../Assets/Images/frozenBanner.png'
import frozen3 from '../Assets/Images/frozenBanner4.png'
import poultry from '../Assets/Images/poultaryBanner3.png'
import poultry2 from '../Assets/Images/poultary_hero.png'
import poultary3 from '../Assets/Images/poultaryBanner4.png'


export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};


export const getCategoryBanner = (cat) => {
    if (cat == 'Grocery') {
        return [grocery, grocery2, grocery3];
    }
    if (cat == 'Electronics') {
        return [electronics, electronics2, electronics3];
    }
    if (cat == 'Health and Beauty') {
        return [beauty, beauty2, beauty3];
    }
    if (cat == 'dairy') {
        return [dairy, dairy2, dairy3];
    }
    if (cat == 'frozen') {
        return [frozen, frozen2, frozen3];
    }
    if (cat == 'poultary') {
        return [poultry, poultry2, poultary3];
    }

}
