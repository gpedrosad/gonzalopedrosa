import { QuestionGuide } from "../_components/QuestionGuide";
import { getGuide } from "../_content/guides";
import { questionMetadata } from "../_lib/metadata";

const guide = getGuide("pareja-con-adiccion-al-juego");

export const metadata = questionMetadata(guide);

export default function ParejaConAdiccionAlJuegoPage() {
  return <QuestionGuide guide={guide} />;
}
