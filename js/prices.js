const ticketSales = [
    {
        location: "nyanga",
        dailySales: 0,
        weeklySales: 0,
        two_weeksSales: 0,
        monthlySales: 0
    },
    {
        location: "langa",
        dailySales: 0,
        weeklySales: 0,
        two_weeksSales: 0,
        monthlySales: 0
    },
    {
        location: "khayelitsha",
        dailySales: 0,
        weeklySales: 0,
        two_weeksSales: 0,
        monthlySales: 0
    },
    {
        location: "gugs",
        dailySales: 0,
        weeklySales: 0,
        two_weeksSales: 0,
        monthlySales: 0
    }
]
let ticket = ticketSales.find(ticket => ticket.location === "nyanga");
console.log(ticket)

var nyangaTickets;

if (localStorage['location']) {
    nyangaTickets = JSON.parse(localStorage.getItem("location"))

    var todayPrice = document.querySelector(".today_price")
    var weeklyPrice = document.querySelector(".weekly_price")
    var forthPrice = document.querySelector(".forth_price")
    var monthlyPrice = document.querySelector(".monthly_price")
    var loc =  document.querySelector(".loc")

    todayPrice.innerHTML = nyangaTickets.daily
    weeklyPrice.innerHTML = nyangaTickets.weekly
    forthPrice.innerHTML = nyangaTickets.two_weeks
    monthlyPrice.innerHTML = nyangaTickets.monthly
   loc.innerHTML = nyangaTickets.location;
   loc.style.marginLeft = "30%";
   loc.style.color = "#1f4202da";
}
function radioButtons() {
    // var allTickets;
    //     if(localStorage["tickets"]){
    //         allTickets = JSON.parse(localStorage.getItem("tickets"))
    //     }
    //     console.log(allTickets)
    var checkedRadioBtn = document.querySelector("input[name='ticket_prices']:checked");
    var typeOfTicket = checkedRadioBtn.value;
    if (checkedRadioBtn) {
       if(nyangaTickets.location == "Nyanga"){
           if(typeOfTicket == "dailySales"){
              ticketSales.dailySales = ticketSales.dailySales + 1
           }
       } 
    }
    let ticket = ticketSales.find(ticket => ticket.location === "nyanga");
console.log(ticket)

}
document.querySelector(".addButton").addEventListener("click", radioButtons)