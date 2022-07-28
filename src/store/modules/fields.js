export default {
    namespaced: true,
    state() {
        return {
            fields: [
                {
                    id: 1,
                    title: 'Front End <br> <span>  Development </span>',
                    src: require('@/assets/images/course.png')
                },
                {
                    id: 2,
                    title: 'Back End <br> <span>   Development </span>',
                    src: require('@/assets/images/course.png')
                },
                {
                    id: 3,
                    title: 'Mobile <br> <span>  Development </span>',
                    src: require('@/assets/images/course.png')


                },
                {
                    id: 4,
                    title: 'Graphic Design <br> <span>   Development </span>',
                    src: require('@/assets/images/course.png')


                },
                {
                    id: 5,
                    title: 'SMM <br> <span>  Social Media Marketing</span> ',
                    src: require('@/assets/images/course.png')

                },
            ]
        }
    },
    getters: {
        getFields(state) {
            return state.fields
        }
    }
}