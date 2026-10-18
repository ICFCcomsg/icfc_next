import { Tx } from "@/components/atoms/tx";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { BlogCard } from "@/components/molecules/blog-card";
import { posts } from "@/lib/blog-posts";
import { translatePosts } from "@/lib/dictionary";

export async function BlogPageContent() {
  const list = await translatePosts(posts);
  return (
    <SitePageTemplate route="blog">
      <main>
        <SiteBreadcrumb
          title={<Tx ns="blog">{"Blog"}</Tx>}
          description={<Tx ns="blog">{"Latest insights on ISO certifications, cybersecurity, sustainability, and business compliance in Singapore"}</Tx>}
        />
        <section
          aria-label="Latest articles"
          className="relative py-30 max-[991px]:py-25 max-[767px]:py-17.5 max-[480px]:py-15"
        >
          <div className="mx-auto w-full px-6 min-[576px]:max-w-135 min-[768px]:max-w-180 min-[992px]:max-w-240 min-[1200px]:max-w-285 min-[1400px]:max-w-330 min-[1441px]:max-w-327.5">
            <div className="grid grid-cols-1 gap-12 min-[768px]:grid-cols-2 min-[992px]:grid-cols-3">
              {list.map((post) => (
                <BlogCard key={post.href} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </SitePageTemplate>
  );
}
