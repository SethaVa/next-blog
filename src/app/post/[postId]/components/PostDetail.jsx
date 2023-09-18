"use client";

import moment from "moment";
import React from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import Container from "@/components/Layout/Container";
import { EditorTextParser } from "@/components";
import AuthorCard from "@/components/AuthorCard";
import CategoryLabel from "@/components/Category";

const PostDetail = ({ post }) => {
  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-lg">
          <div className="flex justify-start items-start space-x-3 text-left">
            <CategoryLabel categories={post.categories} />
          </div>

          <h1 className="text-brand-primary mb-3 mt-2 text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {post.title}
          </h1>

          <div className="mt-3 flex justify-start space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                {post.author.photo && (
                  <Link href={`/author/${post.author.id}`}>
                    <img
                      src={post.author.photo}
                      alt={post?.author?.name}
                      className="rounded-full object-cover"
                      fill
                      sizes="40px"
                    />
                  </Link>
                )}
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-400">
                  <Link href={`/author/${post.author.id}`}>
                    {post.author.name}
                  </Link>
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={post?.publishedAt || post.createdAt}
                  >
                    {format(
                      parseISO(post?.publishedAt || post.createdAt),
                      "MMMM dd, yyyy"
                    )}
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="!pt-0">
        <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
          {post.featuredImage.url && (
            <img
              src={post.featuredImage.url}
              alt={post?.title || "Thumbnail"}
              loading="eager"
              fill
              sizes="100vw"
              className="object-cover w-full"
            />
          )}
        </div>
      </Container>

      <Container>
        <article className="mx-auto max-w-screen-lg ">
          <div className="mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            <EditorTextParser data={post.content} />
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 "
            >
              ← View all posts
            </Link>
          </div>
          {post.author && <AuthorCard author={post.author} />}
        </article>
      </Container>
    </>
  );
};

export default PostDetail;
