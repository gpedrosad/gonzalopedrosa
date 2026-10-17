import {
  InformationalArticle,
  informationalMetadata,
  informationalStaticParams,
} from "@/app/components/InformationalArticle";

export const dynamicParams = false;

export function generateStaticParams() {
  return informationalStaticParams("preguntas");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return informationalMetadata("preguntas", slug);
}

export default async function PreguntaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <InformationalArticle cluster="preguntas" slug={slug} />;
}