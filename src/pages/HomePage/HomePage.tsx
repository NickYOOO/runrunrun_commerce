//src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['Shoes', 'Acc', 'Clothing'];

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-4 gap-4">
            {/* Replace with real product data */}
            {Array(4)
              .fill(0)
              .map((_, idx) => (
                <div key={idx} className="border p-4">
                  <h3>제품 {idx + 1}</h3>
                  <p>가격: 50,000원</p>
                </div>
              ))}
          </div>
          <Link
            to={`/category/${category.toLowerCase()}`}
            className="text-blue-500"
          >
            더보기
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
