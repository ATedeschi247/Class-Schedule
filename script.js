const app = Vue.createApp({
    
    data() {
        
    },
    methods: {
        filterDay(day) {
            var shown = [];
            schedule.forEach(function(Class) {
                if(Class.days.includes(day)) {
                    shown.push(Class);
                }
            });
            while(document.querySelector('tbody').hasChildNodes()) {
                document.querySelector('tbody').removeChild(document.querySelector('tbody').firstChild);
            }
            $(shown).each(function(index, element) {
                let row = document.createElement("tr");
                row.innerHTML += '<td>' + element.className + '</td>'
                row.innerHTML += '<td>' + element.teacherName + '</td>'
                row.innerHTML += '<td>' + element.roomNumber + '</td>'
                row.innerHTML += '<td>' + element.days + '</td>'
                document.querySelector('tbody').appendChild(row);
            })
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