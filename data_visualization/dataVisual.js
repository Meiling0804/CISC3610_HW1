var labels = data.boroughs.map(function (e) {
    return e.location;
});
var data = data.boroughs.map(function (e) {
    return e.number;
});
//chart 1
var ctx = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: [
                'rgba(124, 192, 192)',
                'rgba(255, 99, 105)',
                'rgba(54, 162, 218)',
                'rgba(150, 102, 232)',
                'rgba(255, 206, 92)',
            ],
        }],
    },
});
// chart 2
var ctx = document.getElementById('Horizontal-bar-chart').getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Populations',
            data: data,
            backgroundColor: [
                'rgba(124, 192, 192)',
                'rgba(255, 99, 105)',
                'rgba(54, 162, 218)',
                'rgba(150, 102, 232)',
                'rgba(255, 206, 92)',
            ],
        }],
    },
});


