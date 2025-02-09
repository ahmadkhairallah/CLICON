

import path from 'path';
import fs from 'fs';

export async function GET(request: Request) {
  try {
   
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('query')?.toLowerCase() || ''; 

   
    const productsFilePath = path.join(process.cwd(), 'public/data/products.json');
    const fileData = fs.readFileSync(productsFilePath, 'utf-8');
    const productsData = JSON.parse(fileData);

   
    let searchResults = productsData.categories.flatMap(categoryData => 
      categoryData.products.filter(product => 
        product.name.en.toLowerCase().includes(searchTerm) || 
        product.description.en.toLowerCase().includes(searchTerm)
      )
    );

    return new Response(JSON.stringify(searchResults), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response('Failed to search products', { status: 500 });
  }
}
