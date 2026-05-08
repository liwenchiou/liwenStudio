import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const SUPABASE_URL = "";
const SUPABASE_KEY = ""; // Removed for security
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function dump() {
  console.log('Fetching portfolios from Supabase...');
  
  const { data: projectsData, error } = await supabase
    .from('liwenblog_portfolios')
    .select(`
      *,
      tags:liwenblog_portfolio_tags(
        tag:liwenblog_tags(name)
      )
    `)
    .eq('is_published', true)
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching data:', error);
    return;
  }

  const projects = projectsData.map((p) => ({
    id: p.id.toString(),
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category || 'Development',
    year: p.year || '2026',
    coverImage: p.cover_image?.startsWith('/') ? p.cover_image : `/assets/${p.cover_image}`,
    content: p.content,
    tags: p.tags?.map((t) => t.tag.name) || []
  }));

  const fileContent = `export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  coverImage: string;
  content: string;
  tags: string[];
}

export const projects: Project[] = ${JSON.stringify(projects, null, 2)};
`;

  fs.writeFileSync('./src/data/projects.ts', fileContent);
  console.log('Successfully transferred data to src/data/projects.ts');
}

dump();
