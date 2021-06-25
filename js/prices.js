

const storedTicketSales = localStorage['ticketSales']

const ticketSales = storedTicketSales ? TicketSales(JSON.parse(storedTicketSales)) : TicketSales();

var selectedLocation;

if (localStorage['location']) {
    selectedLocation = JSON.parse(localStorage.getItem("location"))

    var todayPrice = document.querySelector(".today_price")
    var weeklyPrice = document.querySelector(".weekly_price")
    var forthPrice = document.querySelector(".forth_price")
    var monthlyPrice = document.querySelector(".monthly_price")
    var loc = document.querySelector(".loc")

    todayPrice.innerHTML = selectedLocation.daily
    weeklyPrice.innerHTML = selectedLocation.weekly
    forthPrice.innerHTML = selectedLocation.two_weeks
    monthlyPrice.innerHTML = selectedLocation.monthly
    loc.innerHTML = selectedLocation.location;
    loc.style.marginLeft = "30%";
    loc.style.color = "#1f4202da";
}

const adminArea = document.querySelector('.admin')
const priceArea = document.querySelector('.prices')

document.querySelector(".admin-only").addEventListener("click", function () {

    adminArea.classList.toggle('hidden');
    priceArea.classList.toggle('hidden');

});


function radioButtons() {
    // var allTickets;
    //     if(localStorage["tickets"]){
    //         allTickets = JSON.parse(localStorage.getItem("tickets"))
    //     }
    //     console.log(allTickets)
    var checkedRadioBtn = document.querySelector("input[name='ticket_prices']:checked");
    var typeOfTicket = checkedRadioBtn.value;

    ticketSales.countTicketType(selectedLocation.location, typeOfTicket);
    console.log(ticketSales.getData());

    // console.log(massChart.data.datasets);

    const newData = ticketSales.getSalesDataByType();

    massChart.data.datasets.forEach(function(dataset, index) {
        
        while(dataset.data.length > 0) {
            dataset.data.pop()
        };

        newData[index].forEach(function(row){
            dataset.data.push(row);
        })
        
    });

    massChart.update();

    localStorage['ticketSales'] = JSON.stringify(ticketSales.getData());


}
document.querySelector(".addButton").addEventListener("click", radioButtons)