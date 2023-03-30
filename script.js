const app = Vue.createApp({
    
    data() {
        
    },
});

app.mount('#main');
var schedule = [];

$(document).ready(function() {
    fetch('schedule.json').then(function(response) {
        response.json();
    }).then(function(json) {
        console.log(json)
        schedule = JSON.parse(json);
        console.log(schedule);
    })
});
console.log(schedule);