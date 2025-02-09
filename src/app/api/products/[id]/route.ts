import path from "path";
import fs from "fs";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {

    if (!params.id) {
      return new Response(JSON.stringify({ message: "Product ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const productsFilePath = path.join(process.cwd(), "public/data/products.json");
    const fileData = fs.readFileSync(productsFilePath, "utf-8");
    const productsData = JSON.parse(fileData);

   
    const product = productsData.categories
      .flatMap((category) => category.products)
      .find((product: any) => product.id === params.id); 

    if (!product) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Error fetching product by ID:", error);
    return new Response(JSON.stringify({ message: "Failed to fetch product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
