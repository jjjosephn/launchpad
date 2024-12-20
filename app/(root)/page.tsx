import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { Star } from "lucide-react";
import { ST } from "next/dist/shared/lib/utils";
import { title } from "process";

export default async function Home({ searchParams}: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query

  const posts = await client.fetch(STARTUPS_QUERY)
  
  return (
    <>
      <section className="lavender_container">
        <h1 className="heading">
          Launch Your Vision: <br /> Share, Inspire, Innovate
        </h1>

        <p className="sub-heading !max-w-3xl">
          Your Idea, Our Platform — Where Startups and Connections Begin
        </p>

        <SearchForm query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for '${query}'` : 'Latest Startups'}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ): (
            <p className="no-results">No Startups Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
