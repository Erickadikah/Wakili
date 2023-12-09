import { Link } from 'react-router-dom';

import dairyCategoryImg from '../../../../assets/images/categories/dairy.png';
import poultyBeefCategoryImage from '../../../../assets/images/categories/poultryBeef.png';
import fruitsVegetablesCategoryImage from '../../../../assets/images/categories/fruitsVegetables.png';
import herbsSpicesCategoryImage from '../../../../assets/images/categories/herbSpices.png';
import cerealsCategoryImage from '../../../../assets/images/categories/cereals.png';
import vedio from '../../../../assets/vedio/video2.mp4';

const dambulaCategories = [
  {
    category: 'Cereals',
    categoryImage: cerealsCategoryImage,
    redirectsTo: '/shopping/cereals',
  },
  {
    category: 'Dairy',
    categoryImage: dairyCategoryImg,
    redirectsTo: '/shopping/dairy',
  },
  {
    category: 'Fruits & Vegetables',
    categoryImage: fruitsVegetablesCategoryImage,
    redirectsTo: '/shopping/fruitsVegetables',
  },
  {
    category: 'Herbs and Spices',
    categoryImage: herbsSpicesCategoryImage,
    redirectsTo: '/shopping/herbsSpices',
  },
  {
    category: 'Poultry & Beef',
    categoryImage: poultyBeefCategoryImage,
    redirectsTo: '/shopping/poultryBeef',
  },
];

export default function ProductCategories() {
  return (
    <div className="relative lg:h-[70vh] sm:h-full flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={vedio} type="video/mp4" />
      </video>
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(rgba(26, 25, 25, 0.6), rgba(21, 21, 21, 0.6))',
          }}
        />
      </div>
      <div className="relative z-0 text-gray-100 text-center">
        <h2 className="font-extrabold text-3xl sm:text-4xl mb-4 text-green-500">
          Discover Freshness
        </h2>
        <p className="sm:text-lg lg:text-xl text-gray-300 mb-8">
          Explore our selection of the freshest vegetables. Handpicked for you!
        </p>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {dambulaCategories.map((category, index) => (
            <div
              key={index}
              className="text-center flex items-center justify-center transform hover:scale-105 transition-transform duration-300"
            >
              <Link
                to={category.redirectsTo}
                className="p-4  transition-all duration-300 border rounded-md shadow-md"
              >
                <img
                  src={category.categoryImage}
                  alt={category.category}
                  className="hover:translate-y-1 rounded-md"
                />
                <p className="mt-2 text-white">{category.category}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


