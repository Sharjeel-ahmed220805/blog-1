import Link from 'next/link';
import { posts } from '@/data/posts';

export default function PostsPage() {
  return (
    <div className="max-w-4xl mx-auto p-5 ">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-600 hover:text-blue-600">Blog <span  className='text-blue-600 hover:text-red-600'>Posts</span></h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-gray-600">{post.description}</p>
            <Link href={`/posts/${post.id}`} className="mt-4 inline-block text-blue-500 hover:underline">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
