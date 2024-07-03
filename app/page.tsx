import { createClient } from "@/prismicio";
import clsx from "clsx";

import { Home as Homepage } from "./components/Home";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("index", {
    fetchLinks: [
      "project.slices",
      "project.id",
      "project.title",
      "project.type",
      "project.role",
      "project.credits_title",
      "project.credits",
      "project.year",
      "project.website_title",
      "project.website",
      "project.description",
      "project.gallery",
    ],
  });

  return (
    <main className={clsx("flex flex-col bg-white", "lg:grid lg:grid-cols-3")}>
      <Homepage page={page} />
    </main>
  );
}
