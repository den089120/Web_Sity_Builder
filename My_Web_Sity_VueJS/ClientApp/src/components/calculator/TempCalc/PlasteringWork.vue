<template>
    <tr class="p-1">
        <td>
            <img src="../image/icons/caret-down.svg" width="16" height="16" alt="">
            <img src="../image/icons/caret-up.svg" width="16" height="16" alt="">
        </td>
        <td class="text-center">Штукатурные работы</td>
        <td class="text-center">{{ out }}</td>
    </tr>
    <!--hidden table-->
    <tr>
        <td colspan="3" class="p-2">
            <table class="table-light table-hover col w-100">
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-center">Грунтовка стен</td>
                        <td class="text-center" v-modal="outcome">{{ inSquare * 2.6 * 50 }} руб</td>
                    </tr>
                    <tr>
                        <td class="text-center">Установка моячков</td>
                        <td class="text-center" v-modal="outcome">{{ inSquare * 2.6 * 100 }} руб</td>
                    </tr>
                    <tr>
                        <td class="text-center">Штукатурка стен</td>
                        <td class="text-center" v-modal="outcome">{{ inSquare * 2.6 * 300 }} руб</td>
                    </tr>
                    <tr>
                        <td class="text-center">Удаление моячков</td>
                        <td class="text-center" v-modal="outcome">{{ inSquare * 2.6 * 50 }} руб</td>
                    </tr>
                    <tr>
                        <td class="text-center">Черновая уборка</td>
                        <td class="text-center" v-modal="outcome">{{ inSquare * 100 }} руб</td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "PlasteringWork",
        props: {
            square: Number,
        },

        data() {
            return {
                outcome: [],
                inSquare = parseInt(this.square),
                //out: this.summ(),

            }
        },
        
        methods: {
            summ() {
                let sum = 0
                for (let i = 0; i < this.outcome.lenght; i++) {
                    sum = sum + parseInt(this.outcome[i])
                }
                return sum
            }
        }
    }
</script>