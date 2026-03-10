import {
  AlcoholismLandingPage,
  getAlcoholismPageMetadata,
} from "@/app/components/AlcoholismLandingPage";

export const metadata = getAlcoholismPageMetadata("dejar-de-beber-chillan");

export default function DejarDeBeberChillanPage() {
  return <AlcoholismLandingPage pageKey="dejar-de-beber-chillan" />;
}
