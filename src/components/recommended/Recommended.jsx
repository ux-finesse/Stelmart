/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../recommended/Recommended.module.css";
import ProductCard from "../product-card/ProductCard";
import Button from "../../layout/all-buttons/button/Button";
import ProductCardSkeleton from "../product-card/ProductCardSkeleton";

const Recommended = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "/api/products?organization_id=2b92a639cb064fd4a0b05ed36c2a8aa3&Appid=4BZF3Z2LJ6A419R&Apikey=28288daaafc6422faa9c65711698742f20240715163008623971"
        );

        const recommendedProducts = response.data.items.filter((item) =>
          item.categories.some((category) => category.name === "recommended")
        );

        setRecommendedProducts(recommendedProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className={style.skeleton}>
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={style.recommended}>
      <div className={style.recwrp}>
        <div className={style.rectop}>
          <h2>Recommended for you</h2>
        </div>
        <div className={style.pro_btn}>
          <div className={style.products}>
            {recommendedProducts.map((product) => (
              <ProductCard
                key={product.unique_id}
                img={
                  product.photos[0]
                    ? product.photos[0].url
                    : "/product_gxt_headphone_5dd80c_1.webp"
                }
                titleOne="Recommended"
                name={product.name}
                price={
                  product.current_price[0].USD
                    ? product.current_price[0].USD[0]
                    : "N/A"
                }
                rating={product.rating || 0}
                size={product.size || "N/A"}
                description={product.description}
                color={product.color || "N/A"}
              />
            ))}
          </div>
        </div>
        <div className={style.secbtm}>
          <Button text="Our Collection" />
        </div>
      </div>
    </div>
  );
};

export default Recommended;
