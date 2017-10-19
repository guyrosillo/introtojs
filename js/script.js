var user ={
    name: "Guillermo",
    companyName: "Hell, no! Inc.",
    address: "701 Brickell ave. Miami, FL 33131",
    email: "gperez@techlaunch.io",
    picture: "cookiemonster.jpg"
}

var invoices =[
    { 
        inv_id: "0156321",
        companyName: user.companyName,
        date: "9/7/2017",
        order: "Dell Computers",
        amount: 3,
        cost: 3457.67,
        paid: 3457.67,
    },
    {
        inv_id: "0145632",
        companyName: user.companyName,
        date: "1/7/2017",
        order: "HP Printers",
        amount: 2,
        cost: 248.00,
        paid: 150.00, 
    },
    {
        inv_id: "0132110",
        companyName: user.companyName,
        date: "6/14/2016",
        order: "Marketing Coffee Mugs",
        amount: 160,
        cost: 414.00,
        paid: 414.00,
    },
    { 
        inv_id: "0156333",
        companyName: user.companyName,
        date: "12/13/2017",
        order: "Apple",
        amount: 5,
        cost: 13457.67,
        paid: 13457.67,
    },
    {
        inv_id: "0145872",
        companyName: user.companyName,
        date: "11/7/2017",
        order: "Crazy Cat Lady Corp.",
        amount: 69,
        cost: 6999.00,
        paid: 1293.00, 
    },
    {
        inv_id: "0132980",
        companyName: user.companyName,
        date: "8/14/2016",
        order: "Fatty Fatty Bum Bum",
        amount: 10,
        cost: 714.00,
        paid: 714.00,
    }
]

document.querySelector('.name').textContent = user.name;
document.querySelector('.company_name').textContent = user.companyName;
document.querySelector('.address').textContent = user.address;
document.querySelector('.email').textContent = user.email;

for(var i=0; i<invoices.length; i++){
    document.querySelector('.invoiceContainer').innerHTML += `
    <div class="invoice" id=${invoices[i].inv_id}>
    Invoice no.: <br />
    <p>${invoices[i].inv_id}</p>
    Company Name: <br />
    <p>${invoices[i].companyName}</p>
    Date: <br />
    <p>${invoices[i].date}</p>
    Order: <br />
    <p>${invoices[i].order}</p>
    Amount: <br />
    <p>${invoices[i].amount}</p>
    Cost: <br />
    <p>${invoices[i].cost}</p>
    Paid: <br />
    <p>${invoices[i].paid}</p>
    Owed: <br />
    <p>${invoices[i].cost-invoices[i].paid}</p>
</div>
    `
}