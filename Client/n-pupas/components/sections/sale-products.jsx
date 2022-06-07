import SectionTitle from 'components/information/section-title';
import SaleProductCard from 'components/cards/sale-product';

const SaleProductsSection = ({ products, category, onClickHandler }) => {
  const categoryProducts = products.filter(product => product.type === category.id);

  return (
    <div>
      <section className='flex flex-col gap-4'>
        <SectionTitle title={category.category} />
        {categoryProducts.length > 0 ? (
          <div className='flex flex-col gap-5 md:grid md:grid-cols-2'>
            {categoryProducts.map(product => {
              return (
                <SaleProductCard
                  product={product}
                  key={product.id}
                  onClickHandler={() => onClickHandler(product)}
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

export default SaleProductsSection;
