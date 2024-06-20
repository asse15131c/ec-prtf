import Image from "next/image";
import { createClient } from "@/prismicio";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("index", {
    fetchLinks: [
      "project.slices",
      "project.id",
      "project.title",
      "project.website",
      "project.type",
      "project.year",
    ],
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {page.data.projects.map(({ project }) => (
          <div key={project.id}>
            <h2>{project.data.title}</h2>
            <p>{project.data.type}</p>
            <p>{project.data.year}</p>
            <div className="my-8">Slices</div>
            {project.data.slices.map((slice) => (
              <div key={slice.id} className="bg-red-400 mb-24">
                <h2>Slide type: {slice.slice_type}</h2>
                <div>Size for grid: {slice.primary.size}</div>
                <ul>
                  {slice.primary.media_items?.map(({ media }) => (
                    <li key={media.id} className="m-8 bg-green-400">
                      <div>Is an image or video? {media.kind}</div>
                      <div>URL: {media.url}</div>
                    </li>
                  ))}
                </ul>
                <hr />
              </div>
            ))}
          </div>
        ))}
      </ul>
    </main>
  );
}
