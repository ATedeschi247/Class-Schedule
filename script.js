const app = Vue.createApp({
    
    data() {
        
    },
    methods: {
        filterDay(day) {
            
        }
    }
});

app.mount('#main');
var schedule = [];

$(document).ready(function() {
    fetch('schedule.json').then(function(response) {
        return response.json()                  //remember to add "return" as needed!
    }).then(function(json) {
        schedule = json
        $(schedule).each(function(index, element) {
            let row = document.createElement("tr");
            row.innerHTML += '<td>' + element.className + '</td>'
            row.innerHTML += '<td>' + element.teacherName + '</td>'
            row.innerHTML += '<td>' + element.roomNumber + '</td>'
            row.innerHTML += '<td>' + element.days + '</td>'
            document.querySelector('tbody').appendChild(row);
        })
    })
});
console.log(schedule);