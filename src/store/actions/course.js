export const addCourse = (title) => {
    return{
        type: 'ADD_COURSE',
        title
    }
}

export const clearCourse = () => {
    return{
        type: 'CLEAR_COURSE'
    }
}
