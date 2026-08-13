import { PRIVACY_HISTORY } from "@/constants";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata("en", {
    title: "Privacy Policy | mealco",
    path: `/privacy/${PRIVACY_HISTORY[0]}`,
  });
}

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return children;
}
