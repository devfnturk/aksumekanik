import ProductDetail from "@/components/Products/ProductDetail";

const ProductDetailPage = ({ params }) => {

    return (
        <main>
            <ProductDetail productId={params.product} />
        </main>
    );
}

export default ProductDetailPage;