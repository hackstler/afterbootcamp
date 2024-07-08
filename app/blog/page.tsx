import Container from "../components/blog/container";
import { HeroPost } from "../components/blog/hero-post";
import { Intro } from "../components/blog/intro";
import { MoreStories } from "../components/blog/more-stories";
import { getAllPosts } from "../lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <div className='bg-gray-900 text-white flex flex-col items-center justify-center w-full p-full overflow-x-hidden'>
      <Container>
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </div>
  );
}
