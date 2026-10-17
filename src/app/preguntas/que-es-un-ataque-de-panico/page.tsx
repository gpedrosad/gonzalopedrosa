import { QuestionGuide } from "../_components/QuestionGuide";
import { getGuide } from "../_content/guides";
import { questionMetadata } from "../_lib/metadata";

const guide = getGuide("que-es-un-ataque-de-panico");

export const metadata = questionMetadata(guide);

export default function QueEsUnAtaqueDePanicoPage() {
  return <QuestionGuide guide={guide} />;
}
