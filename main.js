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
        addTodo() {
            const data = {
                todoItem: this.todoItem
            };
            axios.post('server.php', data,
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }
            ).then(response => {
                this.todoList = response.data;
                this.todoItem = ''
            })

        },
        // Funzione per cambiare il valore di done
        // markTask() {
        //   this.todoList.done = !todoList.done;
        // }
    },
    mounted() {
        this.readList();
    }
}).mount('#app')