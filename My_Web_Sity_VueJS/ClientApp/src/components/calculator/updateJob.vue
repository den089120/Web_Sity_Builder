<template>
    <form class="row g-3 m-4">
        <div class="col-6 me-5">
            <div class="row">
                <label for="inputName" class="col-4 col-form-label">Название работы</label>
                <div class="col">
                    <input type="text"
                           class="form-control m-2"
                           id="inputName"
                           v-model="UpdateJob.ruName">
                </div>
            </div>
            <div class="row">
                <label for="inputSmDesc" class="col-4 col-form-label">Стоимость</label>
                <div class="col">
                    <input type="text"
                           class="form-control m-2"
                           id="inputSmDesc"
                           v-model="UpdateJob.cost">
                </div>
            </div>
            <div class="row">
                <router-link :to="{ name: 'jobList' }" class="btn col btn-primary m-2">НАЗАД</router-link>
                <router-link :to="{ name: 'jobList' }" @click="upJob" class="btn col btn-success m-2">ОБНОВИТЬ</router-link>
            </div>
        </div>
    </form>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        name: 'updateJob',
        data() {
            return {
                UpdateJob: this.$route.params
            }
        },
        method: {
            ...mapMutations({
               upDateJob: 'jobs/upDateJob'
            }),

            upJob() {
                this.upDateJob(this.UpdateJob)
            }
        },

    }
</script>