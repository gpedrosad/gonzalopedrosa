import { QuestionGuide } from "../_components/QuestionGuide";
import { getGuide } from "../_content/guides";
import { questionMetadata } from "../_lib/metadata";

const guide = getGuide("la-terapia-online-funciona");

export const metadata = questionMetadata(guide);

export default function LaTerapiaOnlineFuncionaPage() {
  return <QuestionGuide guide={guide} />;
}
