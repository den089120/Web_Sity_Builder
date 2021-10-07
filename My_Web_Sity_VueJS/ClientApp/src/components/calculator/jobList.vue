<template>
    <div>
        <div class="row">
            <div class="col">
                Название работ
            </div>
            <div class="col">
                Стоимость
            </div>
            <div class="col">
                <router-link :to="{ name: 'Home' }" class="btn col btn-primary m-2">Назад</router-link>
            </div>
        </div>
        <div v-for="job in listJobs" :key="job.id" class="row">
            <div class="col">
                {{ job.ruName }}
            </div>
            <div class="col">
                {{ job.cost }}
            </div>
            <div class="col">
                <router-link :to="{ name: 'updateJob', params: { ...job } }" class="btn col btn-success m-2">Изменить</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'jobList',
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                listJobs: state => state.jobs.listJobs
            })
        },
    }
</script>