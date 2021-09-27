<template>
    <form class="row g-3 m-4">
        <div class="col-6 me-5">
            <div class="row">
                <label for="inputName" class="col-4 col-form-label">Name product</label>
                <div class="col">
                    <input type="text" class="form-control m-2" id="inputName" placeholder="Name product">
                </div>
            </div>
            <div class="row">
                <label for="inputSmDesc" class="col-4 col-form-label">small Description</label>
                <div class="col">
                    <input type="text" class="form-control m-2" id="inputSmDesc" placeholder="small Description">
                </div>
            </div>
            <div class="row">
                <label for="textArea" class="col-4 col-form-label">Description</label>
                <div class="col">
                    <textarea class="form-control m-2" id="textArea" rows="3"></textarea>
                </div>
            </div>
            <div class="row justify-content-end">
                <select class="form-select m-1" style="width: 21rem;" aria-label="Default select example" id="calcSelect">
                    <option selected disabled>Select calculator</option>
                    <option value="1">room</option>
                    <option value="2">bathroom</option>
                    <option value="3">apartment</option>
                </select>
            </div>
            <div class="row">
                <label for="file" class="col-4 col-form-label">Select file</label>
                <div class="col">
                    <input class="form-control form-control-sm m-2" id="file" type="file">
                </div>
            </div>
            <div class="row">
                <button class="btn col btn-primary m-2">back</button>
                <button type="submit" class="btn col btn-success m-2">add</button>
            </div>
        </div>
        <div class="col-2 m-2" style="width: 20rem;">
            <img class="img-fluid w-auto" src="../image/furniture.jpg" alt="">
        </div>

    </form>
</template>

<script>
    export default {
        name: "CreatePhotoJob",
    }
</script>