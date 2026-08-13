import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata("ko", {
    title: "이용약관 | mealco",
    path: "/terms",
  });
}

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return children;
}
