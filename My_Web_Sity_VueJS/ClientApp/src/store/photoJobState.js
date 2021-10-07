export const photoJobState = {
    state() {
        return {
            listPhotoJob: [
                {
                    id: 1234,
                    path: '/image/ceiling.jpg',
                    description: 'Натяжные потолки очень хороши',
                    calculator: 'ApartmentCalc',
                    category: 'ceiling',
                    square: 23,
                },
                {
                    id: 2345,
                    path: '/image/builder.jpg',
                    description: 'Строим дом мы как хотим и когда хотим',
                    calculator: 'ApartmentCalc',
                    category: 'builder',
                    square: 43,
                },
                {
                    id: 3456,
                    path: '/image/furniture_3.jpg',
                    description: 'Мебель для вашего дома',
                    calculator: 'ApartmentCalc',
                    category: 'furniture',
                    square: 5,
                },
                {
                    id: 4567,
                    path: '/image/ceiling.jpg',
                    description: 'Потолки',
                    calculator: 'ApartmentCalc',
                    category: 'ceiling',
                    square: 79,
                },
                {
                    id: 5678,
                    path: '/image/builder.jpg',
                    description: 'Строитель',
                    calculator: 'ApartmentCalc',
                    category: 'builder',
                    square: 53,
                },
                {
                    id: 6789,
                    path: '/image/furniture_3.jpg',
                    description: 'Мебель',
                    calculator: 'ApartmentCalc',
                    category: 'furniture',
                    square: 112,
                },
            ]
        }
    },
    getters: {},
    mutations: {},
    action: {},
    namespaced: true,
}