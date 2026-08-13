import { PRIVACY_HISTORY } from "@/constants";
import { redirect } from "next/navigation";

export default function Page() {
  redirect(`/en/privacy/${PRIVACY_HISTORY[0]}`);
}
