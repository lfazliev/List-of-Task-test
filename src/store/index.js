import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

export default new Vuex.Store({
    state: {
        tasks: savedTasks
    },
    mutations: {
        ADD_TASK(state, text) {
            state.tasks.push({ text, edited: false, editText: '' });
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        DELETE_TASK(state, taskIndex) {
            state.tasks.splice(taskIndex, 1);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        EDIT_TASK(state, { taskIndex, updatedText }) {
            state.tasks[taskIndex].text = updatedText;
            state.tasks[taskIndex].edited = false;
            state.tasks[taskIndex].editText = '';

            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        }
    },

    actions: {
        addTask({ commit }, text) {
            commit('ADD_TASK', text);
        },
        deleteTask({ commit }, taskIndex) {
            commit('DELETE_TASK', taskIndex);
        },
        editTask({ commit }, payload) {
            commit('EDIT_TASK', payload);
        },
        setTasks({ commit }, tasks) {
            commit('SET_TASKS', tasks);
        },
    },

});
