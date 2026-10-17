import { QuestionGuide } from "../_components/QuestionGuide";
import { getGuide } from "../_content/guides";
import { questionMetadata } from "../_lib/metadata";

const guide = getGuide("la-ludopatia-es-una-enfermedad");

export const metadata = questionMetadata(guide);

export default function LaLudopatiaEsUnaEnfermedadPage() {
  return <QuestionGuide guide={guide} />;
}
