import Products from "@/components/Products";

const ProductsByBrandActivityAreaPage = ({ params }) => {
    return (
        <main>
            <Products brandActivityArea={params.activityArea} brand={params.activityAreaBrand} parent="activityArea" />
        </main>
    );
}

export default ProductsByBrandActivityAreaPage;