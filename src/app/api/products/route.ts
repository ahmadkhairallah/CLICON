
import path from 'path';
import fs from 'fs';

export async function GET() {
  try {
    
    const productsFilePath = path.join(process.cwd(), 'public/data/products.json');
    const fileData = fs.readFileSync(productsFilePath, 'utf-8');
    const productsData = JSON.parse(fileData);

    
    const allProducts = productsData.categories.flatMap(categoryData => categoryData.products);

    return new Response(JSON.stringify(allProducts), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response('Failed to fetch products', { status: 500 });
  }
}
