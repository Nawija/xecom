import { PageHeader } from "@/app/admin/_components/PageHeader";
import ProductForm from "../_components/ProductForm";

export default function AdminNewProductPage() {
    return (
        <>
            <PageHeader>Add Product</PageHeader>
            <ProductForm />
        </>
    );
}
