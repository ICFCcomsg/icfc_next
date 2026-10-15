import { SiteLink } from "@/components/atoms/site-link";
import { BlogCard } from "@/components/molecules/blog-card";
import { posts } from "@/lib/blog-posts";
import { CONTAINER } from "@/components/atoms/container";
import { getDictionary, translatePosts } from "@/lib/dictionary";
import { section, eyebrow, h2 } from "./styles";

export async function HomeInsights() {
  const t = await getDictionary();
  const h = t.home;
  return (
      <section className={`${section} bg-[#F8F8F9]`}>
        <div className={CONTAINER}>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <span className={eyebrow}>{h.insights_eyebrow}</span>
              <h2 className={`${h2} mb-0!`}>{h.insights_title}</h2>
            </div>
            <SiteLink href="/blog" className="font-medium text-[#AB052D]">{h.all_insights} →</SiteLink>
          </div>
          <div className="grid grid-cols-3 max-[991px]:grid-cols-1 gap-6">
            {(await translatePosts(posts.slice(0, 3))).map((post) => (
              <BlogCard key={post.href} post={post} />
            ))}
          </div>
        </div>
      </section>
  );
}
