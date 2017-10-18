var user ={
    name: "Guillermo",
    companyName: "Hell, no! Inc.",
    address: "701 Brickell ave. Miami, FL 33131",
    email: "gperez@techlaunch.io",
    picture: "cookiemonster.jpg"
}

document.querySelector('.name').textContent = user.name;
document.querySelector('.company_name').textContent = user.companyName;
document.querySelector('.address').textContent = user.address;
document.querySelector('.email').textContent = user.email;
