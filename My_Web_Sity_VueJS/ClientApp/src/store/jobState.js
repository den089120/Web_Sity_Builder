export const jobState = {
    state() {
        return {
            listJobs: [
            {
                id: 1,
                name: 'installToilet',
                ruName: 'Установка унитаза',
                category: 'PlumbingWork',
                cost: 2000,
            },
            {
                id: 2,
                name: 'installBathroom',
                ruName: 'Установка ванны',
                category: 'PlumbingWork',
                cost: 2500,
            },
            {
                id: 3,
                name: 'installSink',
                ruName: 'Установка раковины',
                category: 'PlumbingWork',
                cost: 2500,
            },
            {
                id: 4,
                name: 'installMixer',
                ruName: 'Установка смесителя',
                category: 'PlumbingWork',
                cost: 500,
            },
            {
                id: 5,
                name: 'installSewerage',
                ruName: 'Монтаж канализации',
                category: 'PlumbingWork',
                cost: 3500,
            },
            {
                id: 6,
                name: 'installPipes',
                ruName: 'Пайка медных труб',
                category: 'PlumbingWork',
                cost: 12000,
            },
            {
                id: 7,
                name: 'grouting',
                ruName: 'Затирка швов',
                category: 'LayingTiles',
                cost: 100,
            },
            {
                id: 8,
                name: 'drillingHoles',
                ruName: 'Сверление отверстий',
                category: 'LayingTiles',
                cost: 300,
            },
            {
                id: 9,
                name: 'layingTiles',
                ruName: 'Укладка плитки',
                category: 'layingTiles',
                cost: 800,
            },
            {
                id: 10,
                name: 'Priming',
                ruName: 'Грунтование',
                category: 'PlasteringWork',
                cost: 50,
            },
            {
                id: 11,
                name: 'roughCleaning',
                ruName: 'Черновая уборка',
                category: 'PlasteringWork',
                cost: 100,
            },
            {
                id: 12,
                name: 'dismantlingWashers',
                ruName: 'Удаление моячков',
                category: 'PlasteringWork',
                cost: 50,
            },
            {
                id: 13,
                name: 'wallPlaster',
                ruName: 'Штукатурка стен',
                category: 'PlasteringWork',
                cost: 300,
            },
            {
                id: 14,
                name: 'installWashers',
                ruName: 'Установка моячков',
                category: 'PlasteringWork',
                cost: 100,
            },
            {
                id: 15,
                name: 'dismantlingPipes',
                ruName: 'Демонтаж сантехнических труб',
                category: 'DismantlingWork',
                cost: 1500,
            },
            {
                id: 16,
                name: 'removingPlasters',
                ruName: 'Демонтаж штукатурки',
                category: 'DismantlingWork',
                cost: 170,
            },
            {
                id: 17,
                name: 'removingFloor',
                ruName: 'Демонтаж пола',
                category: 'DismantlingWork',
                cost: 500,
            },
            {
                id: 18,
                name: 'removingCover',
                ruName: 'Демонтаж напольного покрытия',
                category: 'DismantlingWork',
                cost: 100,
            },
            {
                id: 19,
                name: 'takingOut',
                ruName: 'Вынос мусора',
                category: 'DismantlingWork',
                cost: 2000,
            },
            {
                id: 20,
                name: 'dismantlingDoor',
                ruName: 'Демонтаж дверей',
                category: 'DismantlingWork',
                cost: 2500,
            },
            {
                id: 21,
                name: 'dismantlingTiles',
                ruName: 'Демонтаж плитки',
                category: 'DismantlingWork',
                cost: 6000,
            },
            {
                id: 22,
                name: 'dismantlingToilet',
                ruName: 'Демонтаж унитаза',
                category: 'DismantlingWork',
                cost: 1000,
            },
            {
                id: 23,
                name: 'dismantlingBathroom',
                ruName: 'Демонтаж ванны',
                category: 'DismantlingWork',
                cost: 1500,
            },
            {
                id: 24,
                name: 'dismantlingSink',
                ruName: 'Демонтаж раковины',
                category: 'DismantlingWork',
                cost: 1000,
            },
            {
                id: 25,
                name: 'dismantlingMixer',
                ruName: 'Демонтаж смесителя',
                category: 'DismantlingWork',
                cost: 300,
            },
            {
                id: 26,
                name: 'dismantlingSewerage',
                ruName: 'Демонтаж канализации',
                category: 'DismantlingWork',
                cost: 1000,
            },
        ],
        }
    },
    getters: {
        createNewListJob(state) {
            let objJobs = {}
            for (let i = 0; i < state.listJobs.length; i++) {
                objJobs[state.listJobs[i]['name']] = { ...state.listJobs[i] }
            }
            return objJobs
        }
    },
    mutations: {
        upDateJob(state, job) {
            state.listJobs.forEach(el => {
                if (el.id === parseInt(job.id)) {
                    el.ruName = job.ruName
                    el.cost = parseInt(job.cost)
                }
            })
        }
    },
    action: {},
    namespaced: true,
}