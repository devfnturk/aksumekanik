import Products from "@/components/Products";

const ProductsByBrandActivityAreaPage = ({ params }) => {
    return (
        <main>
            <Products brandActivityArea={params.activityArea} brand={params.activityArea} parent="activityArea" />
        </main>
    );
}

export default ProductsByBrandActivityAreaPage;