<template>
    <div class=TaskContainer>
        <div v-for="(task, index) in tasks" :key="index">
            <p v-if="!task.edited">{{ task.text }}</p>
            <input v-else v-model="task.editText" type="text" placeholder="Edit task">
            <button @click="deleteTask(index)" v-if="!task.edited">Delete</button>
            <button @click="task.edited = true; task.editText = task.text" v-if="!task.edited">Edit</button>
            <button @click="saveNews(index, task.editText)" v-if="task.edited">Сохранить</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(['tasks'])
    },
    methods: {
        ...mapActions(['deleteTask', 'editTask']),
        saveNews(index, textEdited) {
            if (this.changedTask != '') {
                this.editTask({ taskIndex: index, updatedText: textEdited })
            }
        }
    },

}

</script>
<style>
.TaskContainer {
    display: flex;
    gap: 20px;
    flex-direction: column;
}

.TaskContainer>div {
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    max-width: 300px;
}
</style>