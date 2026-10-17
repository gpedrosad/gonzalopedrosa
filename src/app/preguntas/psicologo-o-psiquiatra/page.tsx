import { QuestionGuide } from "../_components/QuestionGuide";
import { getGuide } from "../_content/guides";
import { questionMetadata } from "../_lib/metadata";

const guide = getGuide("psicologo-o-psiquiatra");

export const metadata = questionMetadata(guide);

export default function PsicologoOPsiquiatraPage() {
  return <QuestionGuide guide={guide} />;
}
