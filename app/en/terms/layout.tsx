import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata("en", {
    title: "Terms of Service | mealco",
    path: "/terms",
  });
}

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return children;
}
