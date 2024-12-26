import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = 
   defineQuery(`*[_type == 'startups' && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
      _id,
      title,
      author -> {
         _id, name, image, bio
      },
      pitch,
      description,
      views,
      _createdAt,
      category,
      _updatedAt,
      image
   }`)