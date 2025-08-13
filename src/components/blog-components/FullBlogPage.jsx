import Text from "../shared/Text";
import { RiArrowLeftLine } from "react-icons/ri";
import { Link as RouterLink } from "react-router-dom";

export default function FullBlogPage() {
  return (
    <>
      <RouterLink to="..">
        <RiArrowLeftLine color="var(--cordis-black)" size="3rem" />
      </RouterLink>
      <Text $type="h1">Full Blog Page</Text>;
    </>
  )
}
