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
      <h1>Home</h1><br></br>
      <h3>Get data detail ukm</h3>
      {
         Object.entries(detailUkm).map(([item, value]) => (
          console.log('ini item',item),
          console.log('ini value',value),
          <div key={item}>
            <p>{value.name}</p>
            <p>{value.namaUkm}</p>
            <p>{value.jenisUkm}</p>
          </div>
          ))   
      }
    </div>
  )
}

export default Home
