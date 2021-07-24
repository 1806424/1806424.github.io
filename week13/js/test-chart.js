var labels = ['1月','2','3','4','5','6'];

var date = {
    labels: labels,
    datesets: [{
        label: '初めてのグラフ',
        date: [0,10,15,3,20,60,10],

    }]
};

var config = {
    type: 'line',
    date,
    options: {},
}

var lineChart = new Chart(
    document.getElementById('lineChart'),
    config,
);