import {
  AlcoholismLandingPage,
  getAlcoholismPageMetadata,
} from "@/app/components/AlcoholismLandingPage";

export const metadata = getAlcoholismPageMetadata("alcoholismo-chillan");

export default function AlcoholismoChillanPage() {
  return <AlcoholismLandingPage pageKey="alcoholismo-chillan" />;
}
