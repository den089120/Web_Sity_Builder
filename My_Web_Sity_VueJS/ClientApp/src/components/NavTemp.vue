<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Fixed navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <router-link :to="{ name: 'Home' }" class="nav-link active" aria-current="page">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'Counter' }" class="nav-link">Counter</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'PhotoJob' }" class="nav-link">PhotoJob</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <div @click="addClass" @mouseover="addClass" class="nav-link dropdown-toggle" style="cursor:pointer">
                                Admin tools
                            </div>
                            <ul class="my_dropdown" :class="{ open: isClass }" @mouseleave="removeClass" aria-labelledby="navbarDropdown">
                                <li>
                                    <router-link :to="{ name: 'CreatePhotoJob' }"
                                                 v-on:click="removeClass"
                                                 class="dropdown-item">
                                        Добавить новое фото
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'jobList' }"
                                                 v-on:click="removeClass"
                                                 class="dropdown-item">
                                        Список работ
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'materialList' }"
                                                 v-on:click="removeClass"
                                                 class="dropdown-item">
                                        Список материалов
                                    </router-link>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </header>
</template>



<style>
    .open {
        display: none;
    }

    .my_dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 1000;
        float: left;
        min-width: 10rem;
        padding: 0.5rem 0;
        margin: 0.125rem 0 0;
        font-size: 1rem;
        color: #212529;
        text-align: left;
        list-style: none;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 0.25rem;
    }
</style>

<script>
    export default {
        name: "NavTemp",
        data() {
            return {
                isClass: true
            }
        },
        methods: {
            addClass() {
                this.isClass = false
            },
            removeClass() {
                this.isClass = true
            }
        }
    }
</script>