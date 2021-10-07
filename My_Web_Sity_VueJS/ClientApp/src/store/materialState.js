export const materialState = {
    state() {
        return {
            listMaterial: [
                {
                    id: 1,
                    name: 'wallPaper',
                    ruName: 'Обои',
                    consumption: 1,
                    category: 'Material',
                    cost: 140,
                },
                {
                    id: 2,
                    name: 'pipe',
                    ruName: 'Медные и канализац. трубы',
                    consumption: 1,
                    category: 'Material',
                    cost: 6500,
                },
                {
                    id: 3,
                    name: 'mixer',
                    ruName: 'Смеситель',
                    consumption: 1,
                    category: 'Material',
                    cost: 3000,
                },
                {
                    id: 4,
                    name: 'sink',
                    ruName: 'Раковина - тумба',
                    consumption: 1,
                    category: 'Material',
                    cost: 5000,
                },
                {
                    id: 5,
                    name: 'toilet',
                    ruName: 'Унитаз',
                    consumption: 1,
                    category: 'Material',
                    cost: 4000,
                },
                {
                    id: 6,
                    name: 'bath',
                    ruName: 'Ванна',
                    consumption: 1,
                    category: 'Material',
                    cost: 8000,
                },
                {
                    id: 7,
                    name: 'bags',
                    ruName: 'Мешки под мусор',
                    consumption: 1,
                    category: 'Material',
                    cost: 20,
                },
                {
                    id: 8,
                    name: 'washers',
                    ruName: 'Моячки',
                    consumption: 1,
                    category: 'Material',
                    cost: 40,
                },
                {
                    id: 9,
                    name: 'SVP',
                    ruName: 'Система Выравнивания Плитки',
                    consumption: 500,
                    category: 'Material',
                    cost: 1700,
                },
                {
                    id: 10,
                    name: 'embroidery',
                    ruName: 'Расшивка',
                    consumption: 0.250,
                    category: 'Material',
                    cost: 150,
                },
                {
                    id: 11,
                    name: 'tile',
                    ruName: 'Плитка',
                    consumption: 1,
                    category: 'Material',
                    cost: 800,
                },
                {
                    id: 12,
                    name: 'glue',
                    ruName: 'Клей плиточный',
                    consumption: 4,
                    category: 'Material',
                    cost: 15,
                },
                {
                    id: 13,
                    name: 'wallPaperGlue',
                    ruName: 'Клей обойный',
                    consumption: 0.1,
                    category: 'Material',
                    cost: 450,
                },
                {
                    id: 14,
                    name: 'priming',
                    ruName: 'Грунтовка',
                    consumption: 0.2,
                    category: 'Material',
                    cost: 80,
                },
                {
                    id: 15,
                    name: 'plastering',
                    ruName: 'Штукатурка',
                    consumption: 8,
                    category: 'Material',
                    cost: 14,
                },
            ]
        }
    },
    getters: {
        createNewListMaterials(state) {
            let objMaterials = {}
            for (let i = 0; i < state.listMaterial.length; i++) {
                objMaterials[state.listMaterial[i]['name']] = { ...state.listMaterial[i] }
            }
            return objMaterials
        }
    },
    mutations: {
        upDateMaterial(state, material) {
            state.listMaterial.forEach(el => {
                if (el.id === parseInt(material.id)) {
                    el.ruName = material.ruName
                    el.consumption = material.consumption
                    el.cost = parseInt(material.cost)
                }
            })
        }
    },
    action: {},
    namespaced: true,
}