import fs from 'fs';
import path from 'path';

// دالة لقراءة بيانات المنتجات من ملف JSON
const readProductsData = (): any => {
  const filePath = path.resolve(__dirname, '../data/products.json');
  const rawData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(rawData);
};

// دالة للحصول على جميع المنتجات
export const getAllProducts = () => {
  const productsData = readProductsData();
  return productsData;
};

// دالة للحصول على المنتجات حسب التصنيف
export const getProductsByCategory = (categorySlug: string) => {
  const productsData = readProductsData();
  const category = productsData.categories.find((category: any) => category.slug === categorySlug);
  return category ? category.products : [];
};

// دالة للحصول على منتج معين
export const getProductById = (productId: number) => {
  const productsData = readProductsData();
  for (let category of productsData.categories) {
    const product = category.products.find((product: any) => product.id === productId);
    if (product) return product;
  }
  return null;
};
