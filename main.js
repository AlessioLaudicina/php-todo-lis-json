const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [],
            todoItem: ''
        }
    },
    methods: {
        readList() {
            axios.get('server.php')
                .then(response => {
                    this.todoList = response.data;
                })
        },
        addTodo(){
            const data = {
                todoItem: this.todoItem
            };
            axios.post('server.php', data, 
            {
                headers
            })

        }
    },
    mounted() {
        this.readList();
    }
}).mount('#app')