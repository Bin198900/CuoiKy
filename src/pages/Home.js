// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .order("id", { ascending: true });

        if (error) throw error;
        setProducts(data);
      } catch (err) {
        setError("Không thể tải sản phẩm. Vui lòng thử lại!");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="loading">Đang tải sản phẩm...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home">
      <h1>Chào mừng đến với Fashion Store</h1>
      <p>Khám phá bộ sưu tập mới nhất của chúng tôi!</p>

      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
