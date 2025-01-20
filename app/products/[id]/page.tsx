import ProductDetails from "@/app/components/ProductDetails";
import { useProductStore } from "@/lib/store";
import { notFound } from "next/navigation";

type PageProps = {
	params: Promise<{
		id: string;
	}>;
};

export default async function ProductPage({ params }: PageProps) {
	const { id } = await params;
	
	const { fetchProductById } = useProductStore.getState();
	const product = await fetchProductById(parseInt(id, 10));

	if (!product) {
		
		notFound();
	}
	return <ProductDetails product={product} />;

	

}
