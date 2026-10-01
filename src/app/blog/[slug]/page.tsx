import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { blogPosts } from "@/data/blog";
import { profile } from "@/data/profile";

const BG: Record<string, string> = {
  purple: "bg-purple",
  yellow: "bg-yellow",
  pink: "bg-pink",
  green: "bg-green",
  paper: "bg-paper",
};

export function generateStaticParams() {
  return blogPosts
    .filter((p) => !p.draft && p.content)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — Sudhanshu Pandey`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — Sudhanshu Pandey`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — Sudhanshu Pandey`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post || post.draft || !post.content) notFound();

  const others = blogPosts.filter((p) => p.slug !== slug && !p.draft).slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="px-3 pb-16 pt-8 sm:px-5">
        <article className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/#blog"
            className="font-mono-ui inline-flex items-center gap-2 text-sm font-bold hover:underline"
          >
            ← BACK_TO_BLOG
          </Link>

          {/* Header card */}
          <header className={`nb-panel mt-5 ${BG[post.color]} p-6 sm:p-10`}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono-ui rounded-full border-2 border-ink bg-paper px-3 py-1 text-xs font-black">
                {post.category}
              </span>
              {post.highlight && (
                <span className="font-mono-ui rounded-full border-2 border-ink bg-ink px-3 py-1 text-xs font-black text-yellow">
                  {post.highlight}
                </span>
              )}
              <span className="font-mono-ui ml-auto text-xs font-bold text-ink/60">
                {post.date} · {post.readTime}
              </span>
            </div>
            <h1 className="font-serif-display mt-5 text-3xl font-black italic leading-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">{post.excerpt}</p>
          </header>

          {/* Article body */}
          <div className="nb-card mt-8 bg-paper p-6 sm:p-10">
            {post.content.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="font-serif-display mt-8 text-2xl font-black italic first:mt-0 sm:text-3xl"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={i}
                    className="my-7 rounded-2xl border-[3px] border-ink bg-yellow px-5 py-4 text-lg font-semibold italic shadow-hard-sm"
                  >
                    “{block.text}”
                  </blockquote>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={i} className="my-5 list-disc space-y-2 pl-6 leading-relaxed">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="my-4 text-base leading-relaxed sm:text-lg">
                  {block.text}
                </p>
              );
            })}

            {/* Signature */}
            <footer className="mt-10 border-t-[3px] border-ink pt-5">
              <p className="font-serif-display text-xl font-black italic">
                — {profile.name.display}
              </p>
              <p className="font-mono-ui mt-1 text-xs font-semibold text-ink/60">
                {profile.role} · {profile.tagline}
              </p>
            </footer>
          </div>

          {/* More posts */}
          {others.length > 0 && (
            <section className="mt-10">
              <h2 className="font-serif-display text-2xl font-black italic">
                More writing
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {others.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className={`nb-card block ${BG[p.color]} p-5 transition-transform duration-200 hover:-translate-y-1`}
                  >
                    <p className="font-mono-ui text-xs font-bold tracking-widest">
                      {p.category}
                    </p>
                    <p className="font-serif-display mt-2 text-xl font-bold italic">
                      {p.title}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-10 text-center">
            <Link href="/#contact" className="nb-btn bg-pink">
              CONTACT_ME <span aria-hidden>✉</span>
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
