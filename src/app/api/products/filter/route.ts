import path from 'path';
import fs from 'fs';

export async function GET(request: Request) {
  try {
    
    const url = new URL(request.url);
    const category = url.searchParams.get('category')?.toLowerCase();
    const maxPrice = parseFloat(url.searchParams.get('maxPrice') || 'Infinity');

    
    const productsFilePath = path.join(process.cwd(), 'public/data/products.json');
    const fileData = fs.readFileSync(productsFilePath, 'utf-8');
    const productsData = JSON.parse(fileData);

  
    console.log("🔍 Filter Criteria:", { category, maxPrice });

  
    let filteredProducts = productsData.categories.flatMap(categoryData => {
      const categoryName = categoryData.name.en.toLowerCase(); 

      return categoryData.products.filter(product => 
        (!category || categoryName === category) && 
        (product.price <= maxPrice)
      );
    });

    
    console.log("✅ Filtered Products Count:", filteredProducts.length);

    return new Response(JSON.stringify(filteredProducts), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("❌ Error in filtering API:", error);
    return new Response('Failed to filter products', { status: 500 });
  }
}
