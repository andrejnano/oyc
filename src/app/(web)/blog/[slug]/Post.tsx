'use client'

import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { PostType } from '~/types/PostType'
import { portableComponents } from '~/components/portableComponents'
import Link from 'next/link'

export default function Post({ post }: { post: PostType }) {
  return (
    <article className="w-full">
      <div className="relative flex h-96 w-full flex-col items-center justify-center">
        {post.mainImage?.url ? (
          <Image
            src={post.mainImage?.url || 'https://bit.ly/placeholder-img'}
            fill
            className="object-cover object-center brightness-50 filter"
            alt={post.mainImage?.alt || 'Placeholder image'}
          />
        ) : (
          <div className="absolute h-full w-full bg-brand" />
        )}
        <div className="container relative mx-auto flex flex-col gap-8 py-16">
          <h1 className="text-3xl font-bold text-white md:text-6xl">{post.title}</h1>
          {/* <BlogPostAuthor post={blogPost} /> */}
        </div>
      </div>

      <div className="container mx-auto flex flex-row overflow-hidden py-6">
        {/* <BlogBreadcrumbs post={blogPost} /> */}
      </div>

      <div className="container mx-auto flex flex-col items-start justify-start gap-32 pb-16 md:flex-row">
        <div className="prose mt-10 flex-grow">
          <PortableText value={post.body} components={portableComponents} />
        </div>
        <div className="flex max-w-md flex-col gap-8">
          <h2 className="text-2xl font-medium">Ďalšie články</h2>
          {/* <OtherBlogPosts post={blogPost} /> */}
          <div>
            Prečítajte si{' '}
            <Link href="/novinky" className="text-primary-500 underline">
              ďalšie články
            </Link>
            .
          </div>
        </div>
      </div>
    </article>
  )
}
