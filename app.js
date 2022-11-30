const { createApp } = Vue
createApp({
    data() {
        return {
            newTask: '',
            tasks: [],
            api_url: 'server.php'
        }
    },
    methods: {
        readTasks(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    this.tasks = response.data
                })
                .catch(err => {
                    console.error(err.message);
                })
        },
        saveTasks() {
            axios
                .post(this.api_url, { newTask: this.newTask }, { headers: { 'Content-Type': 'multipart/form-data' } }
                )
                .then(response => {
                    console.log(response);
                    this.tasks = response.data

                })
                .catch(err => {
                    console.error(err.message);
                })

        }

    },
    mounted() {
        this.readTasks(this.api_url);
    }
}).mount('#app')