new Vue({
    el: '#title',
    data: {
        title: 'Lien vers Durga',
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

new Vue({
    el: '#api',

    data() {
        return {
            info : null
        }
    },

    mounted() {
        axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response.data.bpi))
    }
})