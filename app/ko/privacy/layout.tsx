import { PRIVACY_HISTORY } from "@/constants";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata("ko", {
    title: "개인정보 처리방침 | mealco",
    path: `/privacy/${PRIVACY_HISTORY[0]}`,
  });
}

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return children;
}
