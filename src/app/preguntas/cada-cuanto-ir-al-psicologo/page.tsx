import { QuestionGuide } from "../_components/QuestionGuide";
import { getGuide } from "../_content/guides";
import { questionMetadata } from "../_lib/metadata";

const guide = getGuide("cada-cuanto-ir-al-psicologo");

export const metadata = questionMetadata(guide);

export default function CadaCuantoIrAlPsicologoPage() {
  return <QuestionGuide guide={guide} />;
}
