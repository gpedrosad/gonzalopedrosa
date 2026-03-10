import {
  AlcoholismLandingPage,
  getAlcoholismPageMetadata,
} from "@/app/components/AlcoholismLandingPage";

export const metadata = getAlcoholismPageMetadata(
  "psicologo-alcoholismo-chillan"
);

export default function PsicologoAlcoholismoChillanPage() {
  return <AlcoholismLandingPage pageKey="psicologo-alcoholismo-chillan" />;
}
