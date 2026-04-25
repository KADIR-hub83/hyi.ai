// app/blogs/page.tsx

import Footer from "@/components/Footer";
import Header from "@/components/Navbar";
import CustomWrapper from "@/components/shared/CoustomWrapper";
import { CustomPagination } from "@/components/shared/customPagination";
import { formattedDate } from "@/components/util/formatter";
import HeroSection from "@/components/section/blogs/heroSection";
import CustomSeparator from "@/components/shared/customSeparator";
import Link from "next/link";

interface BlogItem {
  _id: string;
  author: string;
  date: string;
  title: string;
  description: string;
  featured: boolean;
  slug: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  _v: number;
}

type BlogProps = {
  blog: BlogItem;
  dirCol?: boolean;
};

// FULL STATIC BLOG DATA (No Images)
const blogs: BlogItem[] = [
  {
    _id: "1",
    author: "Admin",
    date: "2026-04-20",
    title: "AI in Modern Business",
    description: "How AI is transforming businesses worldwide.",
    featured: true,
    slug: "ai-modern-business",
    tags: ["AI", "Business"],
    createdAt: "2026-04-20",
    updatedAt: "2026-04-20",
    _v: 0,
  },
  {
    _id: "2",
    author: "Admin",
    date: "2026-04-21",
    title: "Future of Automation",
    description: "Automation trends in 2026.",
    featured: true,
    slug: "future-of-automation",
    tags: ["Automation"],
    createdAt: "2026-04-21",
    updatedAt: "2026-04-21",
    _v: 0,
  },
  {
    _id: "3",
    author: "Admin",
    date: "2026-04-22",
    title: "Cloud Technology Growth",
    description: "Why cloud matters in 2026.",
    featured: true,
    slug: "cloud-technology-growth",
    tags: ["Cloud"],
    createdAt: "2026-04-22",
    updatedAt: "2026-04-22",
    _v: 0,
  },
  {
    _id: "4",
    author: "Admin",
    date: "2026-04-23",
    title: "Machine Learning Trends",
    description: "Top ML trends shaping the future.",
    featured: false,
    slug: "machine-learning-trends",
    tags: ["ML"],
    createdAt: "2026-04-23",
    updatedAt: "2026-04-23",
    _v: 0,
  },
];

function Blog({ blog }: BlogProps) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4 hover:bg-white/10 transition"
    >
      <p className="text-sm text-dark_mode-300">
        {formattedDate(blog.createdAt)}
      </p>

      <h3 className="font-semibold text-dark_mode-100 text-xl">
        {blog.title}
      </h3>

      <p className="text-base text-dark_mode-300 line-clamp-3">
        {blog.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {blog.tags.map((tag, index) => (
          <span
            key={index}
            className="text-sm font-medium text-dark_mode-300 glass-gradient rounded-full px-2.5 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams.page) || 1;

  const featuredResponse = blogs.filter((blog) => blog.featured);
  const allBlogs = blogs;

  return (
    <section className="w-full flex flex-col items-center pt-20">
      <Header />

      <div className="w-full flex justify-center px-4 pb-6 md:px-6 lg:pb-8">
        <div className="w-full max-w-[1280px]">
          <HeroSection />
        </div>
      </div>

      <CustomWrapper divStyle="gap-6 md:gap-12">
        {/* Featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredResponse.slice(0, 3).map((blog) => (
            <Blog key={blog._id} blog={blog} />
          ))}
        </div>

        {/* All Blogs */}
        <div className="flex flex-col gap-8">
          <h2 className="hyi-h2">All blog posts</h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {allBlogs.map((blog) => (
              <Blog key={blog._id} blog={blog} />
            ))}
          </div>

          {currentPage > 1 && (
            <div>
              <CustomSeparator />

              <CustomPagination
                page={currentPage}
                totalPages={1}
              />
            </div>
          )}
        </div>
      </CustomWrapper>

      <Footer />
    </section>
  );
}