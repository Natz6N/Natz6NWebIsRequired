import { ProductCard}from "@/Components/UI/Card";

export default function Browse() {
  const productData = {
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 99.99,
    originalPrice: 149.99,
    sale: 33,
    rating: 4,
    reviews: 128,
  };
  return (
    <div className="flex items-cneter justify-center mt-[40px] py-[50px] w-full h-full">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Product Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard
            product={productData}
            onAddToCart={() => alert("Added to cart!")}
            onQuickView={() => alert("Quick view opened!")}
          />
          <ProductCard
            product={{
              image:
                "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
              name: "Smart Watch Series X",
              category: "Wearables",
              price: 299.99,
              originalPrice: 399.99,
              sale: 25,
              rating: 5,
              reviews: 89,
            }}
            onAddToCart={() => alert("Added to cart!")}
            onQuickView={() => alert("Quick view opened!")}
          />
          <ProductCard
            product={{
              image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
              name: "Running Shoes Pro",
              category: "Sports",
              price: 129.99,
              rating: 4,
              reviews: 256,
            }}
            onAddToCart={() => alert("Added to cart!")}
            onQuickView={() => alert("Quick view opened!")}
          />
        </div>
      </div>
    </div>
  );
}
