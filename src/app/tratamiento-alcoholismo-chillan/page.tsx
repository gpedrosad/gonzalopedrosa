import {
  AlcoholismLandingPage,
  getAlcoholismPageMetadata,
} from "@/app/components/AlcoholismLandingPage";

export const metadata = getAlcoholismPageMetadata(
  "tratamiento-alcoholismo-chillan"
);

export default function TratamientoAlcoholismoChillanPage() {
  return <AlcoholismLandingPage pageKey="tratamiento-alcoholismo-chillan" />;
}
