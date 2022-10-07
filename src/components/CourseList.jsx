import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { addCourse, clearCourse } from "../store/actions/course"

const Course = () => {
    const [ value, setValue ] = useState('')

    const courses = useSelector(state => state.course.data)
    const dispatch = useDispatch()

    const add = () => {
        setValue('')
        dispatch(addCourse(value))
    }

    const clear = () => {
        dispatch(clearCourse())
    }

    return (
        <>
            <ul>
                {
                    courses.map((item, index) => (
                        <li key={ index }>
                            { item }
                        </li>
                    ))
                }

                <input
                    type={ value }
                    onChange={ (e) => setValue(e.target.value) }
                />

                <button
                    style={ { marginTop: '15px' } }
                    onClick={ add }
                >
                    Add Course
                </button>

                <button
                    style={ { marginTop: '15px' } }
                    onClick={ clear }
                >
                    clear List Course
                </button>
            </ul>
        </>
    )
}


export default Course