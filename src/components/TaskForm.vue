<template>
    <form @submit.prevent="submitTask" class=taskForm>
        <input v-model="newTask" type="text" placeholder="New task">
        <button type="submit">Add task</button>
    </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            newTask: ''
        }
    },
    methods: {
        ...mapActions(['addTask']),
        submitTask() {
            if (this.newTask) {
                this.addTask(this.newTask)
                this.newTask = ''
            }
        }
    }
}
</script>
<style scoped>
.taskForm>button {
    margin: 10px 0;
}
</style>