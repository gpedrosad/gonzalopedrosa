import {
  InformationalArticle,
  informationalMetadata,
  informationalStaticParams,
} from "@/app/components/InformationalArticle";

export const dynamicParams = false;

export function generateStaticParams() {
  return informationalStaticParams("guias");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return informationalMetadata("guias", slug);
}

export default async function GuiaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <InformationalArticle cluster="guias" slug={slug} />;
}
