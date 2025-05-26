import React, { useContext } from 'react';
import "../CSS/ShopCategory.css";
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  const filteredProducts = all_product.filter(
    item => item.category?.toLowerCase() === props.category.toLowerCase()
  );

  return (
    <div className='shop-category'>
      {props.banner && (
        <img className='shopcategory-banner' src={props.banner} alt="category banner" />
      )}

      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1–{filteredProducts.length}</span> out of {all_product.length} products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt="sort" height="20px" />
        </div>
      </div>

      <div className="shopcategory-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
            No products found for category: <strong>{props.category}</strong>
          </p>
        )}
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
