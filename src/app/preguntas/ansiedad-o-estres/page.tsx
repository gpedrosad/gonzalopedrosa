import { QuestionGuide } from "../_components/QuestionGuide";
import { getGuide } from "../_content/guides";
import { questionMetadata } from "../_lib/metadata";

const guide = getGuide("ansiedad-o-estres");

export const metadata = questionMetadata(guide);

export default function AnsiedadOEstresPage() {
  return <QuestionGuide guide={guide} />;
}
