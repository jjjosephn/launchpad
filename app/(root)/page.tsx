import SearchForm from "@/components/SearchForm";

export default async function Home({ searchParams}: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query
  return (
    <>
      <section className="lavender_container">
        <h1 className="heading">
          Launch Your Vision: <br></br>Share, Inspire, Innovate
        </h1>

        <p className="sub-heading !max-w-3xl">
          Your Idea, Our Platform — Where Startups and Connections Begin
        </p>

        <SearchForm query={query}/>
      </section>
    </>
  );
}
