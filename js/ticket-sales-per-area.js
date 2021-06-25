
var massChart;

var mychart = document.getElementById('myChart').getContext('2d');

massChart = new Chart(mychart, {
    type: "bar",
    data: {
        labels: ['Langa-CPT', 'Nyanga-CPT', 'Khayelitsha-CPT', 'Gugulethu-CPT'],
        datasets: ticketSales.chartData(),
    },
    options: {}
});
