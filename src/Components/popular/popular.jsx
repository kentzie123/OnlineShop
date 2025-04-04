import './Popular.css'
import Item from '../Item/Item'
import data_product from '../../Data/data'

const Popular = () => {
  return (
    <section className="p-lg-2" style={{width:"100%"}}>
        <h1 className='popular-header text-center'>POPULAR IN WOMEN</h1>
        <div className='popular-item-container d-flex justify-content-center flex-wrap gap-3 mt-5 px-2 px-lg-5 py-5'>
            {
                data_product.map((product) => {
                    return (
                        <Item 
                            key={product.id}
                            id={product.id}
                            category={product.category}
                            name={product.name} 
                            image={product.image} 
                            new_price={product.new_price} 
                            old_price={product.old_price}
                        />
                    )
                })
            }
        </div>
    </section>
  )
}

export default Popular