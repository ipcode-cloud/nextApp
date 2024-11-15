import React from "react";
import { SearchParams } from "next/dist/server/request/search-params";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

const Home = async({searchParams}:{searchParams:Promise<{query?: string}>}) => {
  const query=(await searchParams).query
  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: {_id:1, name:'irankunda'},
    _id: 1,
    description:'This is description',
    image: 'ndoli.png',
    category:"Robots",
    title:"Optimus",
    }
  ]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          pitch your startup, <br /> connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get noticed in Virtual Competitions</p>
        <SearchForm query={query}/>
      </section>
      <section className="section_container">
        <p>{query ? `Search Results for "${query}"` : "All StartUps"}</p>
        <ul className="mt-5 card_grid">
          {posts?.length > 0 ? (
            posts.map((post:StartupCardType, index:number)=>(
              <StartupCard key={post?._id} post={post}/> 
            ))
          ):(
            <p>No startup found!</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;


