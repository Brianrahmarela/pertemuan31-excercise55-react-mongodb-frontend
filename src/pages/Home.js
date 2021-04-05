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

      {detailUkm.map((item) => (
        <div key={item._id}>
          <p>Nama Mahasiswa: <b>{item.nama.name}</b></p>  
          <p>Ukm: <b>{item.ukm.namaUkm}</b></p>  
        </div>
        ))}
    </div>
  )
}

export default Home
