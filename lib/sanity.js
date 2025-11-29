import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-05-03",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getAllPosts() {
  try {
    const posts = await client.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        "mainImageUrl": mainImage.asset->url,
        mainImageCaption,
        publishedAt,
        category->{ 
          name, 
          slug,
          parent->{ name, slug }
        },
        content,
        "excerpt": pt::text(content)[0...200]
      }
    `);

    return posts;
  } catch (error) {
    console.error("❌ Error:", error);
    return [];
  }
}

export async function getPostsByCategory(categorySlug) {
  try {
    const posts = await client.fetch(
      `
      *[_type == "post" && category->slug.current == $categorySlug] 
        | order(publishedAt desc) {
          _id,
          title,
          slug,
          "mainImageUrl": mainImage.asset->url,
          mainImageCaption,
          publishedAt,
          category->{ 
            name, 
            slug,
            parent->{ name, slug }
          },
          content,
          "excerpt": pt::text(content)[0...200]
        }
      `,
      { categorySlug }
    );

    return posts;
  } catch (error) {
    console.error("❌ Error:", error);
    return [];
  }
}

export async function getPostBySlugAndCategory(slug, categorySlug) {
  try {
    const post = await client.fetch(
      `
      *[_type == "post" && slug.current == $slug && category->slug.current == $categorySlug][0] {
        _id,
        title,
        "slug": slug.current,
        "mainImageUrl": mainImage.asset->url,
        mainImageCaption,
        content,
        publishedAt,
        "category": {
          "name": category->name,
          "slug": category->slug.current,
          "parent": {
            "name": category->parent->name,
            "slug": category->parent->slug.current
          }
        }
      }
      `,
      { slug, categorySlug }
    );

    return post;
  } catch (error) {
    console.error("❌ Error:", error);
    return null;
  }
}

export async function getCategories() {
  try {
    return await client.fetch(`
      *[_type == "category"] | order(name asc) {
        _id,
        name,
        slug,
        parent->{ name, slug }
      }
    `);
  } catch (error) {
    console.error("❌ Error:", error);
    return [];
  }
}

export async function getCategoriesByParent(parentSlug) {
  try {
    return await client.fetch(
      `
      *[_type == "category" && parent->slug.current == $parentSlug] | order(name asc) {
        _id,
        name,
        slug,
        parent->{ name, slug }
      }
      `,
      { parentSlug }
    );
  } catch (error) {
    console.error("❌ Error:", error);
    return [];
  }
}

export async function getRecentPosts(limit = 5) {
  try {
    const posts = await client.fetch(`
      *[_type == "post"] | order(publishedAt desc)[0...${limit}] {
        _id,
        title,
        slug,
        "mainImageUrl": mainImage.asset->url,
        publishedAt,
        category->{ 
          name, 
          slug,
          parent->{ name, slug }
        },
        "excerpt": pt::text(content)[0...150]
      }
    `);

    return posts;
  } catch (error) {
    console.error("❌ Error:", error);
    return [];
  }
}
