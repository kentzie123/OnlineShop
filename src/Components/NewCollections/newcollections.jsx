import './NewCollections.css';
import Item from '../Item/Item';
import new_collections from '../../Data/new_collections';

const NewCollections = () => {
  return (
    <section className="p-lg-5">
        <div>
            <h1 className="popular-header text-center">NEW COLLECTIONS</h1>
            <div className="d-flex justify-content-center flex-wrap gap-3 mt-5">
                {
                    new_collections.map((product) => {
                        return (
                            <Item 
                                key={product.id} 
                                id={product.id} 
                                name={product.name}
                                category={product.category} 
                                image={product.image} 
                                new_price={product.new_price} 
                                old_price={product.old_price}
                            />
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default NewCollections;
