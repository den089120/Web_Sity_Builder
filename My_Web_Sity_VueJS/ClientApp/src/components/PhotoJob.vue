<template>
    <div class="mt-5" style="display: grid;grid-template-columns: 1fr 1fr 1fr">

        <div v-for="photoJob in listPhotoJob" :key="photoJob.id" class="card mb-4" style="width: 18rem;">
            <img :src="photoJob.path" class="card-img-top" style="height: 14rem" alt="...">
            <div class="card-body">
                <h5 class="card-title">Content for furniture</h5>
                <p class="card-text">{{ photoJob.description }}</p>
            </div>
            <div class="card-body">
                <!--<router-link :to="{name: `${photoJob.calculator}`, params: {image: `${photoJob.path}`, square: photoJob.square}}"
                             class="card-link">Calculator</router-link>-->

                <a href="#" class="card-link">Другая ссылка</a>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "PhotoJob",
        date() {
            return {

            }
        },
        computed: {
            ...mapState({
                listPhotoJob: state => state.photoJobs.listPhotoJob
            })
        },
    }
</script>