import { QuestionGuide } from "../_components/QuestionGuide";
import { getGuide } from "../_content/guides";
import { questionMetadata } from "../_lib/metadata";

const guide = getGuide("cuanto-dura-un-duelo");

export const metadata = questionMetadata(guide);

export default function CuantoDuraUnDueloPage() {
  return <QuestionGuide guide={guide} />;
}