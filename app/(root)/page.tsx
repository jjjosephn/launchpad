import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { Star } from "lucide-react";
import { title } from "process";

export default async function Home({ searchParams}: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query

  const posts = [
    {
      _createdAt: new Date(),
      views: '55',
      author: {_id: 1, name: 'Joseph Nguyen'},
      _id: 1,
      description: 'This is a description',
      category: 'Robot',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2iulfhJqTISVs2AKs5pO-o6xPMduCmWZTMw&s',
      title: 'Wild Robot'
    }
  ]
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
