import farmacia from '../../assets/img/Farmacia.svg'
import './Home.css'

function Home() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Drogaria -custo</h2>
              <p className='text-xl'>Medicamentos e cosméticos</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={farmacia} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        
      </>
    );
}

export default Home;