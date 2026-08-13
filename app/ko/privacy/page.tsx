import { PRIVACY_HISTORY } from "@/constants";
import { redirect } from "next/navigation";

export default function Page() {
  redirect(`/ko/privacy/${PRIVACY_HISTORY[0]}`);
}
