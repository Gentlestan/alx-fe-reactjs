import { useQuery } from "@tanstack/react-query";

// Function to fetch posts
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"], // ✅ must be an array in v4
    queryFn: fetchPosts,
    gcTime: 1000 * 60 * 5, // ✅ replaced cacheTime (v4 uses gcTime)
    refetchOnWindowFocus: true,
    placeholderData: (prev) => prev, // ✅ replaced keepPreviousData
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Posts</h2>

      <button
        onClick={() => refetch()}
        className="px-3 py-2 bg-blue-500 text-white rounded mb-4"
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul className="space-y-2">
        {posts?.slice(0, 10).map((post) => (
          <li key={post.id} className="border p-2 rounded">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
