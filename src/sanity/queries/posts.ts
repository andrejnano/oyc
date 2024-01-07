import { groq } from 'next-sanity'

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
  _id,
  title,
  slug,
  mainImage,
  author->{
    name,
    slug,
    image,
    bio
  },
  categories[]->{
    title,
  },
  publishedAt,
  body
  }`

// Get all posts, sorted by publishedAt in descending order (newest first)
export const postsByDateQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
  _id,
  title,
  slug,
  mainImage,
  author->{
    name,
    slug,
    image,
    bio
  },
  categories[]->{
    title,
  },
  publishedAt,
  body
  }`

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  mainImage,
  author->{
    name,
    slug,
    image,
    bio
  },
  categories[]->{
    title,
  },
  publishedAt,
  body
  }`

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`
