import {useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux';
import {detailUkmAction} from '../redux/actions/home.action'

function Home() {
  const detailUkm = useSelector(state => state.detailUkm.data)
  console.log('detailUkm dari store',detailUkm);

  const dispatch = useDispatch()
  useEffect(()=> {
      dispatch(detailUkmAction())
  },[dispatch])

  return (
    <div>
      <h1>Home</h1>
      {/* <p>{detailUkm.map((item, index) =>(item))}</p> */}
    </div>
  )
}

export default Home
