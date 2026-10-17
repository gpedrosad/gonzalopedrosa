import { QuestionGuide } from "../_components/QuestionGuide";
import { getGuide } from "../_content/guides";
import { questionMetadata } from "../_lib/metadata";

const guide = getGuide("cuanto-dura-una-terapia-psicologica");

export const metadata = questionMetadata(guide);

export default function CuantoDuraUnaTerapiaPage() {
  return <QuestionGuide guide={guide} />;
}
