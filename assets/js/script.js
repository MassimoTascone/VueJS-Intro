new Vue({
    el: '#title',
    data: {
        title: 'Site vers Durga',
        link: 'http://www.durgasoft.com',
        icon: true,
        
    },

    methods: {
        click: function() {
            this.icon = false
        }
    }
});

new Vue({
    el: '.array',
    data: {
        persons: ['Chin', 'Matis', 'Mass', 'Pierre', 'Jeason', 'Octav', 'Lal'],

    }
})