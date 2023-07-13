function changeCountry() {
    let countries = ['India','USA', 'Canada', 'Australia', 'Japan'];
    let randomNumber = getRandomNumber(0, countries.length - 1);
    console.log(randomNumber);
    document.getElementById('myHeading').textContent = countries[randomNumber];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}