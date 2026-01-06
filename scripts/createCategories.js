// scripts/createCategories.js
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

const categories = [
  { title: 'Culture', slug: 'culture' },
  { title: 'Language', slug: 'language' },
  { title: 'Literature', slug: 'literature' },
  { title: 'Education', slug: 'education' },
  { title: 'Economy', slug: 'economy' },
  { title: 'Politics', slug: 'politics' },
  { title: 'Research', slug: 'research' },
  { title: 'Interviews', slug: 'interviews' },
];

async function createCategories() {
  for (const category of categories) {
    try {
      const result = await client.create({
        _type: 'category',
        title: category.title,
        slug: {
          _type: 'slug',
          current: category.slug,
        },
      });
      console.log(`✅ बनाया: ${category.title}`);
    } catch (error) {
      console.error(`❌ एरर: ${category.title}`, error.message);
    }
  }
}

createCategories();