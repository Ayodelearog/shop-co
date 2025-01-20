import CategoryDetails from "@/app/components/CategoryDetails";
import { useProductStore } from "@/lib/store";
import { notFound } from "next/navigation";

type PageProps = {
	params: Promise<{
		name: string;
	}>;
};

export default async function CategoryPage({ params }: PageProps) {
	const { name } = await params;
	const { fetchProductsByCategory } = useProductStore.getState();
	const products = await fetchProductsByCategory(name, false);
   

	if (!products) {
		notFound();
	}

	return <CategoryDetails products={products} />;
}
