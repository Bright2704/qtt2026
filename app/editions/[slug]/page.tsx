import { editions } from "@/data/editions";
import EditionDetail from "./EditionDetail";

export function generateStaticParams() {
  return editions.map((e) => ({ slug: e.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <EditionDetail slug={slug} />;
}
