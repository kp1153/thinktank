import { getPostsByCategory, getCategories } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function CategoryPage({ params }) {
  const safeCategory = decodeURIComponent(params?.category);

  // 🔥 All categories allowed — no parent filter, no restriction
  const allCategories = await getCategories();

  // Slug mapping FIXED (core issue solved)
  const validCategories = allCategories.map(
    (cat) => cat?.slug?.current || cat?.slug
  );

  // ❗ Now culture/economy/politics etc. will NOT be rejected
  if (!validCategories.includes(safeCategory)) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Invalid Category
        </h1>
        <Link href="/" className="text-blue-600 underline text-lg">
          ← Back to Home
        </Link>
      </main>
    );
  }

  const posts = await getPostsByCategory(safeCategory);

  if (!posts?.length) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-6 capitalize">{safeCategory}</h1>
        <p className="text-gray-500 text-lg">
          No posts found in this category.
        </p>
      </main>
    );
  }

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 capitalize">{safeCategory}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post._id}
            className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition"
          >
            {post.mainImageUrl && (
              <Image
                src={post.mainImageUrl}
                alt={post.mainImageAlt || post.title}
                width={800}
                height={600}
                className="w-full object-cover h-56"
              />
            )}

            <div className="p-5">
              <h2 className="text-xl font-bold mb-2 leading-tight">
                <Link
                  href={`/${safeCategory}/${post.slug?.current || post.slug}`}
                  className="hover:text-blue-600"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="text-sm text-gray-500 mb-3">
                {formatDate(post.publishedAt)}
              </p>

              <Link
                href={`/${safeCategory}/${post.slug?.current || post.slug}`}
                className="text-blue-600 font-semibold hover:underline text-sm"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
