export function formatDate(dateString) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const formattedDate = `${day} ${months[monthIndex]} ${year}`;
    return formattedDate;
}

export const cropString = (str, num) => {
    // console.log(str);
    var newstr;
    if (str.length > num) {
        if (window.innerWidth > 700) {
            newstr = str.slice(0, num + 10);
        } else {
            newstr = str.slice(0, num + 5);
        }
        console.log(newstr);
        const result = newstr.concat("...");

        return result;
    } else return str;
};

export function getDateAfterFiveDays() {
    const daysToAdd = 5;
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + daysToAdd);

    // Get day and month names
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Get day, month, and year
    const day = futureDate.getDate();
    const month = months[futureDate.getMonth()];
    const year = futureDate.getFullYear();

    // Format the date as "dd mmm"
    const formattedDate = `${day} ${month}`;

    return formattedDate;
}



