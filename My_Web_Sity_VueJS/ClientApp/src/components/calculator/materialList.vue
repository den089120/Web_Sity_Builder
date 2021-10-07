<template>
    <div>
        <div class="row">
            <div class="col">
                Название материала
            </div>
            <div class="col">
                Расход
            </div>
            <div class="col">
                Стоимость
            </div>
            <div class="col">
                <router-link :to="{ name: 'Home' }" class="btn col btn-primary m-2">Назад</router-link>
            </div>
        </div>
        <div v-for="material in listMaterial" :key="material.id" class="row">
            <div class="col">
                {{ material.ruName }}
            </div>
            <div class="col">
                {{ material.consumption }}
            </div>
            <div class="col">
                {{ material.cost }}
            </div>
            <div class="col">
                <router-link :to="{ name: 'updateMaterial', params: { ...material } }" class="btn col btn-success m-2">Изменить</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: 'materialList',
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                listMaterial: state => state.materials.listMaterial
            })
        },
    }
</script>