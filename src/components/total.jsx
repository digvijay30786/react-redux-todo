import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export const Total = () => {
    const count = useSelector((state) => state.count);
    return <h3>Total Non complete Todo : {count}</h3>
}