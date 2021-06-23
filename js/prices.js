var nyangaTickets;

if (localStorage['nyanga']) {
    nyangaTickets = JSON.parse(localStorage.getItem("nyanga"))

    var todayPrice = document.querySelector(".today_price")
    var weeklyPrice = document.querySelector(".weekly_price")
    var forthPrice = document.querySelector(".forth_price")
    var monthlyPrice = document.querySelector(".monthly_price")

    todayPrice.innerHTML = nyangaTickets.daily
    weeklyPrice.innerHTML = nyangaTickets.weekly
    forthPrice.innerHTML = nyangaTickets.two_weeks
    monthlyPrice.innerHTML = nyangaTickets.monthly
}
