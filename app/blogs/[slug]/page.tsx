import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  Tag,
  Bookmark,
  ChevronRight,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOGS_DATA, BlogPost } from "@/data/blogs";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return BLOGS_DATA.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blog = BLOGS_DATA.find((b) => b.slug === params.slug);
  if (!blog) return { title: "Article Not Found" };

  return {
    title: `${blog.title} | Alutecksystems Insights`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [{ url: blog.coverImage }],
    },
  };
}

export default function BlogDetailPage({ params }: PageProps) {
  const blog = BLOGS_DATA.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  // Related articles
  const relatedArticles = BLOGS_DATA.filter((b) => b.slug !== blog.slug).slice(0, 2);

  return (
    <div className="bg-charcoal min-h-screen pb-24 text-lightgrey">
      {/* Article Header */}
      <section className="relative py-14 lg:py-20 bg-graphite border-b border-graphite-border overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blogs", href: "/blogs" },
              { label: blog.category, href: "/blogs" },
              { label: blog.title },
            ]}
          />

          <div className="mt-8 space-y-4">
            <span className="px-3 py-1 rounded bg-gold/15 text-gold text-xs font-mono font-bold uppercase tracking-wider inline-block">
              {blog.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-textgrey pt-2 border-t border-graphite-border">
              <span className="flex items-center gap-1.5 text-lightgrey">
                <User className="w-3.5 h-3.5 text-gold" />
                {blog.author.name} ({blog.author.role})
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gold" />
                {blog.publishedDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold" />
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cover Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="relative aspect-[16/9] rounded-sm overflow-hidden border border-graphite-border shadow-2xl bg-charcoal">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="prose prose-invert prose-gold max-w-none text-lightgrey text-sm sm:text-base leading-relaxed space-y-6">
          <div
            dangerouslySetInnerHTML={{
              __html: blog.content
                .replace(/### (.*?)\n/g, '<h3 class="text-xl font-heading font-bold text-white mt-8 mb-3">$1</h3>')
                .replace(/\n\n/g, "<p class='mb-4 text-lightgrey leading-relaxed'>")
                .replace(/\n1. (.*?)/g, "<li class='ml-6 list-decimal mb-1 text-lightgrey'>$1</li>")
                .replace(/\n2. (.*?)/g, "<li class='ml-6 list-decimal mb-1 text-lightgrey'>$1</li>")
                .replace(/\n3. (.*?)/g, "<li class='ml-6 list-decimal mb-1 text-lightgrey'>$1</li>")
                .replace(/\n4. (.*?)/g, "<li class='ml-6 list-decimal mb-1 text-lightgrey'>$1</li>")
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gold font-semibold">$1</strong>'),
            }}
          />
        </div>

        {/* Tags */}
        <div className="pt-8 pb-4 border-t border-graphite-border mt-12 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-textgrey flex items-center gap-1 mr-2">
            <Tag className="w-3.5 h-3.5 text-gold" />
            Tags:
          </span>
          {blog.tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded bg-graphite border border-graphite-border text-[11px] font-mono text-lightgrey"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="p-6 rounded-sm bg-graphite border border-graphite-border mt-8 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-charcoal border border-gold/40 text-gold flex items-center justify-center font-bold text-lg flex-shrink-0">
            A
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-gold block">
              Published by
            </span>
            <h4 className="font-heading font-bold text-sm text-white">
              {blog.author.name}
            </h4>
            <p className="text-xs text-textgrey mt-0.5">
              {blog.author.role} at ALUTECKSYSTEMS. Focused on structural fenestration standards, Saint-Gobain architectural glass selection, and Indian climatic durability.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="pt-16 border-t border-graphite-border mt-16 space-y-6">
            <h3 className="font-heading font-bold text-xl text-white">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blogs/${rel.slug}`}
                  className="group p-5 rounded-sm bg-graphite border border-graphite-border hover:border-gold/50 flex flex-col justify-between transition-all"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-gold uppercase block">
                      {rel.category}
                    </span>
                    <h4 className="font-heading font-semibold text-sm text-white group-hover:text-gold transition-colors">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-textgrey line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <span className="text-xs text-gold flex items-center gap-1 font-medium mt-4">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
