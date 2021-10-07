<template>
    <form class="row g-3 m-4">
        <div class="col-6 me-5">
            <div class="row">
                <label for="inputName" class="col-4 col-form-label">Название материала</label>
                <div class="col">
                    <input type="text"
                           class="form-control m-2"
                           id="inputName"
                           v-model="material.ruName">
                </div>
            </div>
            <div class="row">
                <label for="inputConsumption" class="col-4 col-form-label">Расход</label>
                <div class="col">
                    <input type="text"
                           class="form-control m-2"
                           id="inputConsumption"
                           v-model="material.consumption">
                </div>
            </div>
            <div class="row">
                <label for="inputSmDesc" class="col-4 col-form-label">Стоимость</label>
                <div class="col">
                    <input type="text"
                           class="form-control m-2"
                           id="inputSmDesc"
                           v-model="material.cost">
                </div>
            </div>
            <div class="row">
                <router-link :to="{ name: 'materialList' }" class="btn col btn-primary m-2">НАЗАД</router-link>
                <router-link :to="{ name: 'materialList' }" @click="upMaterial" class="btn col btn-success m-2">ОБНОВИТЬ</router-link>
            </div>
        </div>
    </form>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        name: 'updateMaterial',
        data() {
            return {
                material: this.$route.params
            }
        },
        method: {
            ...mapMutations({
                upDateMaterial: 'materials/upDateMaterial'
            }),
            upMaterial() {
                this.upDateMaterial(this.material)
            }
        },
    }
</script>