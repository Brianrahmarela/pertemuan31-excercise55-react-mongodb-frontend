import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { detailUkmAction } from '../redux/actions/home.action'

function Home() {
  const detailUkm = useSelector(state => state.detailUkm.data)
  console.log('detailUkm dari store', detailUkm);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(detailUkmAction())
  }, [dispatch])

  return (
    <>
    {(detailUkm.nama && detailUkm.ukm) &&
    <div>
      <h1>{detailUkm.nama.name}</h1>
      <h1>{detailUkm.ukm.jenisUkm}</h1>
      <h1>{detailUkm.ukm.namaUkm}</h1>

    </div>
    }
    </>
  )
}

export default Home
