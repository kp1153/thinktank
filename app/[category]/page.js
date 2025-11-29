import { getPostsByCategory, getCategories } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function CategoryPage({ params }) {
  const { category } = params;
  const safeCategory = decodeURIComponent(category);

  // ⬇⬇ यहीं असली fix किया गया है — अब सभी categories valid
  const allCategories = await getCategories();
  const validCategories = allCategories.map((cat) => cat.slug.current);

  if (!validCategories.includes(safeCategory)) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Invalid Category
        </h1>
        <p className="text-gray-600 text-lg">This category does not exist.</p>
        <Link
          href="/"
          className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold hover:underline"
        >
          ← Back to Home
        </Link>
      </main>
    );
  }

  const posts = await getPostsByCategory(safeCategory);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (!posts || posts.length === 0) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 font-medium hover:underline mb-2 inline-block"
        >
          ← Back
        </Link>
        <h1 className="text-4xl font-bold mb-6 text-gray-900 capitalize">
          {safeCategory.replace(/-/g, " ")}
        </h1>
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            No Posts Found
          </h2>
          <p className="text-gray-600 text-lg">
            No posts have been published in this category yet.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="text-blue-600 hover:text-blue-800 font-medium hover:underline mb-6 inline-block"
      >
        ← Back
      </Link>

      <h1 className="text-4xl font-bold mb-8 text-gray-900 capitalize">
        {safeCategory.replace(/-/g, " ")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {post.mainImageUrl && (
              <Image
                src={post.mainImageUrl}
                alt={post.mainImageAlt || post.title}
                width={800}
                height={600}
                className="object-contain w-full max-h-52 bg-gray-100"
              />
            )}

            <div className="p-6">
              <div className="flex justify-between mb-3">
                <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-semibold capitalize">
                  {post.category?.name || "General"}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {formatDate(post.publishedAt)}
                </span>
              </div>

              <h2 className="text-xl font-bold mb-4 text-gray-900 leading-tight">
                <Link
                  href={`/${safeCategory}/${post.slug.current}`}
                  className="hover:underline hover:text-blue-700"
                >
                  {post.title}
                </Link>
              </h2>

              <Link
                href={`/${safeCategory}/${post.slug.current}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm hover:underline"
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
