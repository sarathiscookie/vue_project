let app = new Vue({
    el: '#app',
    data: {
        stockStatus: true,
        stock: 5,
        stockCalculations: [
            { id: 1, percentage: "1 - 25" },
            { id: 2, percentage: "25 - 50" }, 
            { id: 3, percentage: "50 - 75" }, 
            { id: 4, percentage: "75 - 100" },
        ], 
        message: 'Yes it is available !'
    },
    
}) 