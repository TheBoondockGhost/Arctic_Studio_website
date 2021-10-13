import React from "react"
import Head from "next/head"
import { Post, Category } from "../shared/types"
import { Feed } from "../components/Feed"
import { StartPage } from "../components/StartPage"
import { fetchPosts, fetchCategories } from "../api/summary"

// type FrontProps = {
//   posts: Post[]
//   categories: Category[]
// }

// export async function getStaticProps() {
//   const categories = await fetchCategories()
//   const posts = await fetchPosts()
//   return { props: { posts, categories } }
// }

export default function Front() {
  return (
    <>
      <Head>
        <title>Arctic studio</title>
      </Head>

      <StartPage />

    </>
  )
}
