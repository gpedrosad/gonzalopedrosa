import { InformationalHub, informationalHubMetadata } from "@/app/components/InformationalHub";

export const metadata = informationalHubMetadata("preguntas");

export default function PreguntasPage() {
  return <InformationalHub cluster="preguntas" />;
}
