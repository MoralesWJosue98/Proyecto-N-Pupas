import SectionTitle from 'components/information/section-title';
import ProductCard from 'components/cards/product';

const MenuProductsSection = ({ products, category, onDeleteHandler }) => {
  const categoryProducts = products.filter(product => product.type === category.id);

  return (
    <div>
      <section className='flex flex-col gap-4'>
        <SectionTitle title={category.category} />
        {categoryProducts.length > 0 ? (
          <div className='flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-3'>
            {categoryProducts.map(product => {
              return (
                <ProductCard
                  product={product}
                  key={product.id}
                  onDeleteHandler={() => onDeleteHandler(product.name)}
                />
              );
            })}
          </div>
        ) : (
          <p>No se encontraron productos</p>
        )}
      </section>
    </div>
  );
};

export default MenuProductsSection;
