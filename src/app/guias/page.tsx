import { InformationalHub, informationalHubMetadata } from "@/app/components/InformationalHub";

export const metadata = informationalHubMetadata("guias");

export default function GuiasPage() {
  return <InformationalHub cluster="guias" />;
}
