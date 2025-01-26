import Header from "../_shared/Header";
import Wrapper from "../_shared/Wrapper";
import SingleProductCategoryList from "../_shared/SingleProductCategoryList";

async function ProductsPage() {
    try {
        const response = await fetch("https://fakestoreapi.com/products/categories", {
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }

        const categories: string[] = await response.json();

        return (
            <Wrapper>
                <Header />
                <div className="container mx-auto py-8">
                    <h1 className="text-2xl font-bold mb-6">Product Categories</h1>
                    <div className="space-y-8">
                        {categories.map((category) => (
                            <SingleProductCategoryList key={category} category={category} />
                        ))}
                    </div>
                </div>
            </Wrapper>
        );
    } catch (error: unknown) {
        console.error("Failed to fetch categories:", error);
        return (
            <Wrapper>
                <Header />
                <div className="container mx-auto py-8">
                    <p className="text-red-500">
                        Failed to load categories: {error instanceof Error ? error.message : "Unknown error"}
                    </p>
                </div>
            </Wrapper>
        );
    }
}

export default ProductsPage;
