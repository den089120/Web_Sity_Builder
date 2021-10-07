<template>
    <div class="col">
        <div class="card shadow" style="max-width: 540px;margin: 1.5rem auto">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="@/image/furniture.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Заголовок карточки</h5>
                        <p class="card-text">Это более широкая карта с вспомогательным текстом ниже в качестве естественного перехода к дополнительному контенту. Этот контент немного длиннее.</p>
                        <div class="row border rounded-3 m-1" style="background-color: #94E499">
                            <div class="col text-center" style="padding: 0">Итог по работе</div>
                            <div class="col-4 text-end" style="padding: 0">{{ Math.round(finalCost) }} руб.</div>
                        </div>
                        <div class="row border rounded-3 m-1" style="background-color: #94E499">
                            <div class="col text-center" style="padding: 0">Итог по материалам</div>
                            <div class="col-4 text-end" style="padding: 0">{{ Math.round(Material) }} руб.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col border rounded-3 shadow me-1">
                <div class="row bg-info border rounded-3 m-1">
                    <div class="col-1"></div>
                    <div class="col text-center">Работа</div>
                    <div class="col-3 text-end">Стоимость</div>
                </div>
                <div class="row bg-light border rounded-3 m-1" @click="showDismantlingWork">
                    <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1"
                         style="background-color: #DDBDA9">
                        <img v-if="!showDismantling" src="@/image/icons/caret-down.svg" width="16" height="16" alt="">
                        <img v-else src="@/image/icons/caret-up.svg" width="16" height="16" alt="">
                    </div>
                    <div class="col text-center">Демонтажные работы</div>
                    <div class="col-3 text-end">{{ Math.round(DismantlingWork) }} руб</div>
                </div>

                <div v-show="showDismantling" class="col border rounded-3 shadow-sm" style="background-color: #D7F6FF">

                    <div @click="changeCost('dismantlingPipesDismantlingWork', 'DismantlingWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['dismantlingPipesDismantlingWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Демонтаж сантехнических труб</div>
                        <div class="col-3 text-end" ref="dismantlingPipesDismantlingWork">{{ 1500 }} руб</div>
                    </div>

                    <div @click="changeCost('dismantlingSewerageDismantlingWork', 'DismantlingWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['dismantlingSewerageDismantlingWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Демонтаж канализации</div>
                        <div class="col-3 text-end" ref="dismantlingSewerageDismantlingWork">{{ 1000 }} руб</div>
                    </div>

                    <div @click="changeCost('dismantlingMixerDismantlingWork', 'DismantlingWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['dismantlingMixerDismantlingWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Демонтаж смесителей</div>
                        <div class="col-3 text-end" ref="dismantlingMixerDismantlingWork">{{ 600 }} руб</div>
                    </div>

                    <div @click="changeCost('dismantlingSinkDismantlingWork', 'DismantlingWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['dismantlingSinkDismantlingWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Демонтаж раковин</div>
                        <div class="col-3 text-end" ref="dismantlingSinkDismantlingWork">{{ 1000 }} руб</div>
                    </div>

                    <div @click="changeCost('dismantlingBathroomDismantlingWork', 'DismantlingWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['dismantlingBathroomDismantlingWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Демонтаж ванной</div>
                        <div class="col-3 text-end" ref="dismantlingBathroomDismantlingWork">{{ 1500 }} руб</div>
                    </div>

                    <div @click="changeCost('dismantlingToiletDismantlingWork', 'DismantlingWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['dismantlingToiletDismantlingWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Демонтаж унитаза</div>
                        <div class="col-3 text-end" ref="dismantlingToiletDismantlingWork">{{ 1000 }} руб</div>
                    </div>

                    <div @click="changeCost('dismantlingTilesDismantlingWork', 'DismantlingWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['dismantlingTilesDismantlingWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Демонтаж плитки</div>
                        <div class="col-3 text-end" ref="dismantlingTilesDismantlingWork">{{ 6000 }} руб</div>
                    </div>

                    <div @click="changeCost('dismantlingDoorDismantlingWork', 'DismantlingWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['dismantlingDoorDismantlingWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Демонтаж дверей</div>
                        <div class="col-3 text-end" ref="dismantlingDoorDismantlingWork">{{ 2500 }} руб</div>
                    </div>

                    <div @click="changeCost('takingOutDismantlingWork', 'DismantlingWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['takingOutDismantlingWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Вынос мусора</div>
                        <div class="col-3 text-end" ref="takingOutDismantlingWork">{{ 6000 }} руб</div>
                    </div>

                    <div @click="changeCost('removingCoverDismantlingWork', 'DismantlingWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['removingCoverDismantlingWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Демонтаж напольного покрытия</div>
                        <div class="col-3 text-end" ref="removingCoverDismantlingWork">{{ Math.round(inSquare * 100) }} руб</div>
                    </div>

                    <div @click="changeCost('removingFloorDismantlingWork', 'DismantlingWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['removingFloorDismantlingWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Демонтаж пола</div>
                        <div class="col-3 text-end" ref="removingFloorDismantlingWork">{{ Math.round(inSquare * 500) }} руб</div>
                    </div>

                    <div @click="changeCost('removingPlastersDismantlingWork', 'DismantlingWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['removingPlastersDismantlingWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Демонтаж штукатурки</div>
                        <div class="col-3 text-end" ref="removingPlastersDismantlingWork">{{ Math.round((inSquare * 2.6) * 300) }} руб</div>
                    </div>

                </div>

                <div class="row bg-light border rounded-3 m-1" @click="showPlasteringWork">
                    <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1"
                         style="background-color: #DDBDA9">
                        <img v-if="!showPlastering" src="@/image/icons/caret-down.svg" width="16" height="16" alt="">
                        <img v-else src="@/image/icons/caret-up.svg" width="16" height="16" alt="">
                    </div>
                    <div class="col text-center">Штукатурные работы</div>
                    <div class="col-3 text-end">{{ Math.round(PlasteringWork) }} руб</div>
                </div>

                <div v-show="showPlastering" class="col border rounded-3 shadow-sm" style="background-color: #D7F6FF">

                    <div @click="changeCost('wallPrimingPlasteringWork', 'PlasteringWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['wallPrimingPlasteringWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Грунтовка стен</div>
                        <div class="col-3 text-end" ref="wallPrimingPlasteringWork">{{ Math.round(inSquare * 2.6 * 50) }} руб</div>
                    </div>

                    <div @click="changeCost('installWashersPlasteringWork', 'PlasteringWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['installWashersPlasteringWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Установка моячков</div>
                        <div class="col-3 text-end" ref="installWashersPlasteringWork">{{ Math.round(inSquare * 2.6 * 100) }} руб</div>
                    </div>

                    <div @click="changeCost('wallPlasterPlasteringWork', 'PlasteringWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['wallPlasterPlasteringWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Штукатурка стен</div>
                        <div class="col-3 text-end" ref="wallPlasterPlasteringWork">{{ Math.round(inSquare * 2.6 * 300) }} руб</div>
                    </div>

                    <div @click="changeCost('dismantlingWashersPlasteringWork', 'PlasteringWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['dismantlingWashersPlasteringWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Удаление моячков</div>
                        <div class="col-3 text-end" ref="dismantlingWashersPlasteringWork">{{ Math.round(inSquare * 2.6 * 50) }} руб</div>
                    </div>

                    <div @click="changeCost('roughCleaningPlasteringWork', 'PlasteringWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['roughCleaningPlasteringWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Черновая уборка</div>
                        <div class="col-3 text-end" ref="roughCleaningPlasteringWork">{{ Math.round(inSquare * 100) }} руб</div>
                    </div>

                </div>

                <div class="row bg-light border rounded-3 m-1" @click="showLayingTiles">
                    <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1"
                         style="background-color: #DDBDA9">
                        <img v-if="!showLaying" src="@/image/icons/caret-down.svg" width="16" height="16" alt="">
                        <img v-else src="@/image/icons/caret-up.svg" width="16" height="16" alt="">
                    </div>
                    <div class="col text-center">Укладка плитки</div>
                    <div class="col-3 text-end">{{ Math.round(LayingTiles) }} руб</div>
                </div>

                <div v-show="showLaying" class="col border rounded-3 shadow-sm" style="background-color: #D7F6FF">

                    <div @click="changeCost('wallPrimingLayingTiles', 'LayingTiles')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['wallPrimingLayingTiles']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Грунтовка стен</div>
                        <div class="col-3 text-end" ref="wallPrimingLayingTiles">{{ Math.round(5 * 2.6 * 50) }} руб</div>
                    </div>

                    <div @click="changeCost('layingTilesLayingTiles', 'LayingTiles')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['layingTilesLayingTiles']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Укладка плитки</div>
                        <div class="col-3 text-end" ref="layingTilesLayingTiles">{{ Math.round(((5 * 2.6) + 5) * 800) }} руб</div>
                    </div>

                    <div @click="changeCost('drillingHolesLayingTiles', 'LayingTiles')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['drillingHolesLayingTiles']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Сверление отверстий</div>
                        <div class="col-3 text-end" ref="drillingHolesLayingTiles">{{ Math.round(5 * 2.6 * 300) }} руб</div>
                    </div>

                    <div @click="changeCost('groutingLayingTiles', 'LayingTiles')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['groutingLayingTiles']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Затирка швов</div>
                        <div class="col-3 text-end" ref="groutingLayingTiles">{{ Math.round(((5 * 2.6) + 5) * 100) }} руб</div>
                    </div>

                    <div @click="changeCost('roughCleaningLayingTiles', 'LayingTiles')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['roughCleaningLayingTiles']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Черновая уборка</div>
                        <div class="col-3 text-end" ref="roughCleaningLayingTiles">{{ Math.round(5 * 100) }} руб</div>
                    </div>

                </div>

                <div class="row bg-light border rounded-3 m-1" @click="showPlumbingWork">
                    <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1"
                         style="background-color: #DDBDA9">
                        <img v-if="!showPlumbing" src="@/image/icons/caret-down.svg" width="16" height="16" alt="">
                        <img v-else src="@/image/icons/caret-up.svg" width="16" height="16" alt="">
                    </div>
                    <div class="col text-center">Сантехнические работы</div>
                    <div class="col-3 text-end">{{ Math.round(PlumbingWork) }} руб</div>
                </div>

                <div v-show="showPlumbing" class="col border rounded-3 shadow-sm" style="background-color: #D7F6FF">

                    <div @click="changeCost('installPipesPlumbingWork', 'PlumbingWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['installPipesPlumbingWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Пайка медных труб</div>
                        <div class="col-3 text-end" ref="installPipesPlumbingWork">{{ 12000 }} руб</div>
                    </div>

                    <div @click="changeCost('installSeweragePlumbingWork', 'PlumbingWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['installSeweragePlumbingWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Монтаж канализации</div>
                        <div class="col-3 text-end" ref="installSeweragePlumbingWork">{{ 3500 }} руб</div>
                    </div>

                    <div @click="changeCost('installMixerPlumbingWork', 'PlumbingWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['installMixerPlumbingWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Установка смесителей</div>
                        <div class="col-3 text-end" ref="installMixerPlumbingWork">{{ 1500 }} руб</div>
                    </div>

                    <div @click="changeCost('installSinkPlumbingWork', 'PlumbingWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['installSinkPlumbingWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Установка раковины</div>
                        <div class="col-3 text-end" ref="installSinkPlumbingWork">{{ 2500 }} руб</div>
                    </div>

                    <div @click="changeCost('installBathroomPlumbingWork', 'PlumbingWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['installBathroomPlumbingWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Установка ванны</div>
                        <div class="col-3 text-end" ref="installBathroomPlumbingWork">{{ 4000 }} руб</div>
                    </div>

                    <div @click="changeCost('installToiletPlumbingWork', 'PlumbingWork')"
                         class="row border rounded-3 m-1"
                         style="background-color: #C8FFF1">
                        <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                            <img v-show="arrayShowing['installToiletPlumbingWork']" src="@/image/icons/check2-circle.svg" alt="">
                        </div>
                        <div class="col text-center">Установка унитаза</div>
                        <div class="col-3 text-end" ref="installToiletPlumbingWork">{{ 2000 }} руб</div>
                    </div>

                </div>

                <div class="row bg-light border rounded-3 m-1">
                    <div class="col-1"></div>
                    <div class="col text-end">Итог по работам</div>
                    <div class="col-3 text-end">{{ Math.round(finalCost) }} руб.</div>
                </div>

            </div>
            <div class="col  border rounded-3 shadow">

                <div class="row bg-info border rounded-3 m-1">
                    <div class="col-1"></div>
                    <div class="col text-center p-0">Материал</div>
                    <div class="col-2 text-center p-0">Объем</div>
                    <div class="col-3 text-end">Стоимость</div>
                </div>

                <div @click="changeCost('primingMaterial', 'Material', 'primingVolume')" class="row bg-light border rounded-3 m-1">
                    <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                        <img v-show="arrayShowing['primingMaterial']" src="@/image/icons/check2-circle.svg" alt="">
                    </div>
                    <div class="col text-center p-0">Грунтовка</div>
                    <div class="col-2 text-center p-0" ref="primingVolume">{{ Math.round(((inSquare * 2.6) + inSquare) * 0.2)  }} л.</div>
                    <div class="col-3 text-end" ref="primingMaterial">{{ Math.round((((inSquare * 2.6) + inSquare) * 0.2) * 80) }} руб.</div>
                </div>

                <div @click="changeCost('plasteringMaterial', 'Material', 'plasteringVolume')" class="row bg-light border rounded-3 m-1">
                    <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                        <img v-show="arrayShowing['plasteringMaterial']" src="@/image/icons/check2-circle.svg" alt="">
                    </div>
                    <div class="col text-center p-0">Штукатурка</div>
                    <div class="col-2 text-center p-0" ref="plasteringVolume">{{ Math.round((inSquare * 2.6) * 8) }} кг.</div>
                    <div class="col-3 text-end" ref="plasteringMaterial">{{ Math.round(((inSquare * 2.6) * 8) * 14) }} руб.</div>
                </div>

                <div @click="changeCost('wallPaperMaterial', 'Material', 'wallPaperVolume')" class="row bg-light border rounded-3 m-1">
                    <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                        <img v-show="arrayShowing['wallPaperMaterial']" src="@/image/icons/check2-circle.svg" alt="">
                    </div>
                    <div class="col text-center p-0">Обои</div>
                    <div class="col-2 text-center p-0" ref="wallPaperVolume">{{ Math.round((inSquare * 2.6)) }} м.кв.</div>
                    <div class="col-3 text-end" ref="wallPaperMaterial">{{ Math.round(((inSquare * 2.6)) * 140) }} руб.</div>
                </div>

                <div @click="changeCost('wallPaperGlueMaterial', 'Material','wallPaperGlueVolume')" class="row bg-light border rounded-3 m-1">
                    <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                        <img v-show="arrayShowing['wallPaperGlueMaterial']" src="@/image/icons/check2-circle.svg" alt="">
                    </div>
                    <div class="col text-center p-0">Клей обойный</div>
                    <div class="col-2 text-center p-0" ref="wallPaperGlueVolume">{{ Math.round((inSquare * 2.6) * 8) }} кг.</div>
                    <div class="col-3 text-end" ref="wallPaperGlueMaterial">{{ Math.round(((inSquare * 2.6) * 8) * 14) }} руб.</div>
                </div>

                <div @click="changeCost('glueMaterial', 'Material', 'glueVolume')" class="row bg-light border rounded-3 m-1">
                    <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                        <img v-show="arrayShowing['glueMaterial']" src="@/image/icons/check2-circle.svg" alt="">
                    </div>
                    <div class="col text-center p-0">Клей плиточный</div>
                    <div class="col-2 text-center p-0" ref="glueVolume">{{ Math.round(((5 * 2.6) + 5) * 4) }} кг.</div>
                    <div class="col-3 text-end" ref="glueMaterial">{{ Math.round((((5 * 2.6) + 5) * 4) * 15) }} руб.</div>
                </div>

                <div @click="changeCost('tileMaterial', 'Material', 'tileVolume')" class="row bg-light border rounded-3 m-1">
                    <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                        <img v-show="arrayShowing['tileMaterial']" src="@/image/icons/check2-circle.svg" alt="">
                    </div>
                    <div class="col text-center p-0">Плитка</div>
                    <div class="col-2 text-center p-0" ref="tileVolume">{{ Math.round((5 * 2.6) + 5) }} м.кв.</div>
                    <div class="col-3 text-end" ref="tileMaterial">{{ Math.round(((5 * 2.6) + 5) * 800) }} руб.</div>
                </div>

                <div @click="changeCost('embroideryMaterial', 'Material', 'embroideryVolume')" class="row bg-light border rounded-3 m-1">
                    <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                        <img v-show="arrayShowing['embroideryMaterial']" src="@/image/icons/check2-circle.svg" alt="">
                    </div>
                    <div class="col text-center p-0">Расшивка</div>
                    <div class="col-2 text-center p-0" ref="embroideryVolume">{{ Math.round(((5 * 2.6) + 5) * 0.250) }} кг.</div>
                    <div class="col-3 text-end" ref="embroideryMaterial">{{ Math.round((((5 * 2.6) + 5) * 0.250) * 150) }} руб.</div>
                </div>

                <div @click="changeCost('SVPMaterial', 'Material', 'SVPVolume')" class="row bg-light border rounded-3 m-1">
                    <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                        <img v-show="arrayShowing['SVPMaterial']" src="@/image/icons/check2-circle.svg" alt="">
                    </div>
                    <div class="col text-center p-0">Система Выравнивания Плитки</div>
                    <div class="col-2 text-center p-0" ref="SVPVolume">{{ 500 }} шт.</div>
                    <div class="col-3 text-end" ref="SVPMaterial">{{ 1700 }} руб.</div>
                </div>

                <div @click="changeCost('washersMaterial', 'Material', 'washersVolume')" class="row bg-light border rounded-3 m-1">
                    <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                        <img v-show="arrayShowing['washersMaterial']" src="@/image/icons/check2-circle.svg" alt="">
                    </div>
                    <div class="col text-center p-0">Моячки</div>
                    <div class="col-2 text-center p-0" ref="washersVolume">{{ Math.round(inSquare * 2) }} шт.</div>
                    <div class="col-3 text-end" ref="washersMaterial">{{ Math.round((inSquare * 2) * 50) }} руб.</div>
                </div>

                <div @click="changeCost('bagsMaterial', 'Material', 'bagsVolume')" class="row bg-light border rounded-3 m-1">
                    <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                        <img v-show="arrayShowing['bagsMaterial']" src="@/image/icons/check2-circle.svg" alt="">
                    </div>
                    <div class="col text-center p-0">Мешки под мусор</div>
                    <div class="col-2 text-center p-0" ref="bagsVolume">{{ 40 }} шт.</div>
                    <div class="col-3 text-end" ref="bagsMaterial">{{ 40 * 20 }} руб.</div>
                </div>

                <div @click="changeCost('bathMaterial', 'Material', 'bathVolume')" class="row bg-light border rounded-3 m-1">
                    <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                        <img v-show="arrayShowing['bathMaterial']" src="@/image/icons/check2-circle.svg" alt="">
                    </div>
                    <div class="col text-center p-0">Ванна</div>
                    <div class="col-2 text-center p-0" ref="bathVolume">{{ 1 }} шт.</div>
                    <div class="col-3 text-end" ref="bathMaterial">{{ 8000 }} руб.</div>
                </div>

                <div @click="changeCost('toiletMaterial', 'Material', 'toiletVolume')" class="row bg-light border rounded-3 m-1">
                    <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                        <img v-show="arrayShowing['toiletMaterial']" src="@/image/icons/check2-circle.svg" alt="">
                    </div>
                    <div class="col text-center p-0">Унитаз</div>
                    <div class="col-2 text-center p-0" ref="toiletVolume">{{ 1 }} шт.</div>
                    <div class="col-3 text-end" ref="toiletMaterial">{{ 4000 }} руб.</div>
                </div>

                <div @click="changeCost('sinkMaterial', 'Material', 'sinkVolume')" class="row bg-light border rounded-3 m-1">
                    <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                        <img v-show="arrayShowing['sinkMaterial']" src="@/image/icons/check2-circle.svg" alt="">
                    </div>
                    <div class="col text-center p-0">Раковина - тумба</div>
                    <div class="col-2 text-center p-0" ref="sinkVolume">{{ 1 }} шт.</div>
                    <div class="col-3 text-end" ref="sinkMaterial">{{ 5000 }} руб.</div>
                </div>

                <div @click="changeCost('mixerMaterial', 'Material', 'mixerVolume')" class="row bg-light border rounded-3 m-1">
                    <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                        <img v-show="arrayShowing['mixerMaterial']" src="@/image/icons/check2-circle.svg" alt="">
                    </div>
                    <div class="col text-center p-0">Смеситель</div>
                    <div class="col-2 text-center p-0" ref="mixerVolume">{{ 1 }} шт.</div>
                    <div class="col-3 text-end" ref="mixerMaterial">{{ 3000 }} руб.</div>
                </div>

                <div @click="changeCost('pipeMaterial', 'Material')" class="row bg-light border rounded-3 m-1">
                    <div class="col-1 d-flex rounded-pill justify-content-center align-items-center m-1">
                        <img v-show="arrayShowing['pipeMaterial']" src="@/image/icons/check2-circle.svg" alt="">
                    </div>
                    <div class="col text-center p-0">Медные и канализац. трубы</div>
                    <div class="col-2 text-center p-0" ref="pipeVolume">{{ '--//--' }}</div>
                    <div class="col-3 text-end" ref="pipeMaterial">{{ 6500 }} руб.</div>
                </div>

                <div class="row bg-light border rounded-3 m-1">
                    <div class="col-1"></div>
                    <div class="col text-center p-0">Итог по Материалам</div>
                    <div class="col-2 text-center p-0">{{ '--//--' }}</div>
                    <div class="col-3 text-end">{{ Math.round(Material) }} руб.</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ApartmentCalc",

        data() {
            return {
                //pathImg: this.$route.params.image,
                //inSquare: this.$route.params.square,
                arrPlastering: {},
                arrMaterialVolume: {},
                finalCost: 0,

                Material: 0,
                PlasteringWork: 0,
                PlumbingWork: 0,
                DismantlingWork: 0,
                LayingTiles: 0,

                showDismantling: false,
                showPlastering: false,
                showPlumbing: false,
                showLaying: false,

                arrayShowing: {
                    dismantlingPipesDismantlingWork: true,
                    removingCoverDismantlingWork: true,
                    takingOutDismantlingWork: true,
                    dismantlingDoorDismantlingWork: true,
                    dismantlingTilesDismantlingWork: true,
                    dismantlingToiletDismantlingWork: true,
                    dismantlingBathroomDismantlingWork: true,
                    dismantlingSinkDismantlingWork: true,
                    dismantlingMixerDismantlingWork: true,
                    dismantlingSewerageDismantlingWork: true,
                    removingFloorDismantlingWork: true,
                    removingPlastersDismantlingWork: true,
                    wallPrimingPlasteringWork: true,
                    installWashersPlasteringWork: true,
                    wallPlasterPlasteringWork: true,
                    dismantlingWashersPlasteringWork: true,
                    roughCleaningPlasteringWork: true,
                    wallPrimingLayingTiles: true,
                    layingTilesLayingTiles: true,
                    drillingHolesLayingTiles: true,
                    groutingLayingTiles: true,
                    roughCleaningLayingTiles: true,
                    installPipesPlumbingWork: true,
                    installSeweragePlumbingWork: true,
                    installMixerPlumbingWork: true,
                    installSinkPlumbingWork: true,
                    installBathroomPlumbingWork: true,
                    installToiletPlumbingWork: true,

                    primingMaterial: true,
                    plasteringMaterial: true,
                    wallPaperMaterial: true,
                    wallPaperGlueMaterial: true,
                    glueMaterial: true,
                    tileMaterial: true,
                    embroideryMaterial: true,
                    SVPMaterial: true,
                    washersMaterial: true,
                    bagsMaterial: true,
                    bathMaterial: true,
                    toiletMaterial: true,
                    sinkMaterial: true,
                    mixerMaterial: true,
                    pipeMaterial: true,
                }
            }
        },
        mounted() {
            
            this.$nextTick(function () {
                this.finalCost = this.sumFinal()
                this.PlasteringWork = this.sumWork('PlasteringWork')
                this.PlumbingWork = this.sumWork('PlumbingWork')
                this.DismantlingWork = this.sumWork('DismantlingWork')
                this.LayingTiles = this.sumWork('LayingTiles')
                this.Material = this.sumWork('Material')
            })
        },

        methods: {
            changeCost(name, nameJob, matVolume = null) {
                if (matVolume === null) {
                    if (this.$refs[name].textContent === '0 руб') {
                        this.$refs[name].textContent = `${this.arrPlastering[name]}`
                        this.finalCost = this.sumFinal()
                        this[nameJob] = this.sumWork(nameJob)
                        this.arrayShowing[name] = true
                    } else {
                        this.arrPlastering[name] = this.$refs[name].textContent
                        this.$refs[name].textContent = '0 руб'
                        this.finalCost = this.sumFinal()
                        this[nameJob] = this.sumWork(nameJob)
                        this.arrayShowing[name] = false
                    }
                } else {
                    if (this.$refs[name].textContent === '0 руб') {
                        this.$refs[name].textContent = `${this.arrPlastering[name]}`
                        this.$refs[matVolume].textContent = `${this.arrMaterialVolume[matVolume]}`
                        this.finalCost = this.sumFinal()
                        this[nameJob] = this.sumWork(nameJob)
                        this.arrayShowing[name] = true
                    } else {
                        this.arrPlastering[name] = this.$refs[name].textContent
                        this.arrMaterialVolume[matVolume] = this.$refs[matVolume].textContent
                        this.$refs[matVolume].textContent = '--//--'
                        this.$refs[name].textContent = '0 руб'
                        this.finalCost = this.sumFinal()
                        this[nameJob] = this.sumWork(nameJob)
                        this.arrayShowing[name] = false
                    }
                }

            },
            sumCost() {
                let sum = 0
                const keys = Object.keys(this.$refs)
                for (let i = 0; i < keys.length; i++) {
                    sum = sum + parseInt(this.$refs[keys[i]].textContent)
                }
                return sum
            },
            sumFinal() {
                let sum = 0
                let keys = Object.keys(this.$refs)

                keys = keys.filter(key => !key.endsWith('Material'))
                keys = keys.filter(key => !key.endsWith('Volume'))

                for (let i = 0; i < keys.length; i++) {
                   sum = sum + parseInt((this.$refs[keys[i]].textContent).split(' ')[0]) 
                }
                return sum
            },
            sumWork(name) {
                let sum = 0
                const keys = Object.keys(this.$refs)
                for (let i = 0; i < keys.length; i++) {
                    if (keys[i].endsWith(name)) {
                        sum = sum + parseInt(this.$refs[keys[i]].textContent)
                    }
                }
                return sum
            },

            showPlumbingWork() {
                this.showPlumbing = !this.showPlumbing
            },
            showPlasteringWork() {
                this.showPlastering = !this.showPlastering
            },
            showDismantlingWork() {
                this.showDismantling = !this.showDismantling
            },
            showLayingTiles() {
                this.showLaying = !this.showLaying
            },
        }
    }
</script>