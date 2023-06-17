<template>
    <div>
        <router-link to="/">Go to Home</router-link>
        <task-form></task-form>
        <task-list></task-list>
    </div>
</template>

<script>
import TaskForm from '../components/TaskForm.vue'
import TaskList from '../components/TaskList.vue'

export default {
    components: {
        TaskForm,
        TaskList
    }
}
</script>
