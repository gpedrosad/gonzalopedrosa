import { QuestionGuide } from "../_components/QuestionGuide";
import { getGuide } from "../_content/guides";
import { questionMetadata } from "../_lib/metadata";

const guide = getGuide("que-es-la-terapia-cognitivo-conductual");

export const metadata = questionMetadata(guide);

export default function QueEsLaTerapiaCognitivoConductualPage() {
  return <QuestionGuide guide={guide} />;
}
