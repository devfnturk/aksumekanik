import Products from "@/components/Products";

const ProductsByBrandActivityAreaPage = ({ params }) => {

    return (
        <main>
            <Products product={params.product} brand={params.brand} parent="brand" />
        </main>
    );
}

export default ProductsByBrandActivityAreaPage;