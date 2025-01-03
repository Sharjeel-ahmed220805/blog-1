import { posts } from '@/data/posts';
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';

interface PostProps {
  params: { id: string };
}

export default function Post({ params }: PostProps) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <h2 className="text-2xl font-bold text-center mt-10">POST NOT FOUND</h2>;
  }

  const renderParagraphs = (description: string) => {
    return description.split('\n').map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5 bg-slate-100">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 hover:text-blue-600 text-center animate-color-change">
        {post.title}
      </h1>

      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
        />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>

      <CommentSection comments={post.comments} />
      <AuthorCard />
    </div>
  );
}
