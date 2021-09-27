<template>
    <div class="mt-5" style="display: grid;grid-template-columns: 1fr 1fr 1fr">
        <div class="card mb-4" style="width: 18rem;">
            <img src="../image/ceiling.jpg" class="card-img-top" style="height: 14rem" alt="...">
            <div class="card-body">
                <h5 class="card-title">Content for ceiling</h5>
                <p class="card-text">Небольшой пример текста, который должен основываться на названии карты и составлять основную часть содержимого карты.</p>
            </div>
            <div class="card-body">
                <router-link :to="{ name: 'ApartmentCalc' }" class="card-link">Calculator</router-link>
                <a href="#" class="card-link">Другая ссылка</a>
            </div>
        </div>


        <div class="card mb-4" style="width: 18rem;">
            <img src="../image/builder.jpg" class="card-img-top" style="height: 14rem" alt="...">
            <div class="card-body">
                <h5 class="card-title">Content for builder</h5>
                <p class="card-text">Небольшой пример текста, который должен основываться на названии карты и составлять основную часть содержимого карты.</p>
            </div>
            <div class="card-body">
                <a href="#" class="card-link">Ссылка карточки</a>
                <a href="#" class="card-link">Другая ссылка</a>
            </div>
        </div>


        <div class="card mb-4" style="width: 18rem;">
            <img src="../image/furniture_3.jpg" class="card-img-top" style="height: 14rem" alt="...">
            <div class="card-body">
                <h5 class="card-title">Content for furniture</h5>
                <p class="card-text">Небольшой пример текста, который должен основываться на названии карты и составлять основную часть содержимого карты.</p>
            </div>
            <div class="card-body">
                <a href="#" class="card-link">Ссылка карточки</a>
                <a href="#" class="card-link">Другая ссылка</a>
            </div>
        </div>
        <div class="card mb-4" style="width: 18rem;">
            <img src="../image/ceiling.jpg" class="card-img-top" style="height: 14rem" alt="...">
            <div class="card-body">
                <h5 class="card-title">Content for ceiling</h5>
                <p class="card-text">Небольшой пример текста, который должен основываться на названии карты и составлять основную часть содержимого карты.</p>
            </div>
            <div class="card-body">
                <a href="#" class="card-link">Ссылка карточки</a>
                <a href="#" class="card-link">Другая ссылка</a>
            </div>
        </div>


        <div class="card mb-4" style="width: 18rem;">
            <img src="../image/builder.jpg" class="card-img-top" style="height: 14rem" alt="...">
            <div class="card-body">
                <h5 class="card-title">Content for builder</h5>
                <p class="card-text">Небольшой пример текста, который должен основываться на названии карты и составлять основную часть содержимого карты.</p>
            </div>
            <div class="card-body">
                <a href="#" class="card-link">Ссылка карточки</a>
                <a href="#" class="card-link">Другая ссылка</a>
            </div>
        </div>


        <div class="card mb-4" style="width: 18rem;">
            <img src="../image/furniture_3.jpg" class="card-img-top" style="height: 14rem" alt="...">
            <div class="card-body">
                <h5 class="card-title">Content for furniture</h5>
                <p class="card-text">Небольшой пример текста, который должен основываться на названии карты и составлять основную часть содержимого карты.</p>
            </div>
            <div class="card-body">
                <a href="#" class="card-link">Ссылка карточки</a>
                <a href="#" class="card-link">Другая ссылка</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PhotoJob",
    }
</script>