function TicketSales(params) {

    const ticketSalesInput = [
        {
            location: "Nyanga",
            dailySales: 0,
            weeklySales: 0,
            two_weeksSales: 0,
            monthlySales: 0
        },
        {
            location: "Langa",
            dailySales: 0,
            weeklySales: 0,
            two_weeksSales: 0,
            monthlySales: 0
        },
        {
            location: "Khayelitsha",
            dailySales: 0,
            weeklySales: 0,
            two_weeksSales: 0,
            monthlySales: 0
        },
        {
            location: "Gugulethu",
            dailySales: 0,
            weeklySales: 0,
            two_weeksSales: 0,
            monthlySales: 0
        }
    ];

    const ticketSales = params || ticketSalesInput;



    function countTicketType(route, type) {
        const locationTickets = ticketSales.find(ticket => ticket.location === route);
        if (!locationTickets[type]) {
            locationTickets[type] = 0;
        }
        locationTickets[type]++;
    }

    function getData() {
        return ticketSales;
    }

    function getSalesDataByType() {
        const locations = ["Langa",
            "Nyanga",
            "Khayelitsha",
            "Gugulethu"];

        const ticketTypes = [
            "dailySales",
            "weeklySales",
            "two_weeksSales",
            "monthlySales"
        ];

        const salesByType = ticketTypes.map(function(ticketType){
            return locations.map(location => {
                const theTicketSale = ticketSales.find(function(ticketSale) {
                    return ticketSale.location === location;
                })
                return theTicketSale[ticketType]
             })
        });

        return salesByType;
    }



    function chartData() {

        const data = getSalesDataByType();
        return [{
            label: 'Daily',
            data: data[0],
            backgroundColor: 'green',
            borderWidth: 5
        },
        {
            label: 'Weekly',

            data: data[1],
            backgroundColor: 'blue',
            borderWidth: 5
        },
        {
            label: 'FortNightly',

            data: data[2],
            backgroundColor: 'yellow',
            borderWidth: 5
        },
        {
            label: 'Monthly',
            data: data[3], 
            backgroundColor: 'red',
            borderWidth: 5
        }]
    }

    return {
        chartData,
        getData,
        countTicketType,
        getSalesDataByType
    }


}