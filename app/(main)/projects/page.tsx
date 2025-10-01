import NavBar from "@/components/NavBar";
import { client } from "@/sanity/client";
import { SanityDocument } from "@sanity/client";
import Link from "next/link";
import { FaCalendarAlt, FaAngleRight } from "react-icons/fa";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const POSTS_QUERY = `*[
    _type == "project"
    && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, start_date, description, project_icon}`;

const options = { next: { revalidate: 30 } };

export default async function ProjectsPage() {
  const projects = await client.fetch<SanityDocument[]>(
    POSTS_QUERY,
    {},
    options
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <main className="flex flex-col flex-grow">
        <NavBar />
        <div className="h-24" />

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
            <p className="text-xl text-gray-300 mb-12">
              A collection of my work and technical projects
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects
                .sort(
                  (a, b) =>
                    new Date(b.start_date).getTime() -
                    new Date(a.start_date).getTime()
                )
                .map((project) => (
                  <Link
                    key={project._id}
                    href={`/projects/${project.slug.current}`}
                    className="group block p-6 bg-gray-900 border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-colors duration-150 rounded-lg"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          {project.project_icon && (
                            <Image
                              src={urlFor(project.project_icon)
                                .width(48 * 2)
                                .height(48 * 2)
                                .url()}
                              alt={`${project.title} icon`}
                              width={48}
                              height={48}
                              className="flex-shrink-0"
                            />
                          )}
                          <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h2>
                        </div>
                        <FaAngleRight className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                      </div>

                      {project.description && (
                        <p className="text-gray-300 mb-4 flex-grow">
                          {project.description}
                        </p>
                      )}

                      <div className="mt-auto pt-4 flex items-center text-gray-400 text-sm border-t border-gray-700">
                        <FaCalendarAlt className="mr-2" />
                        <span>
                          {new Date(project.start_date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
