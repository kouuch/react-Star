export const post = () => {
  return fetch(`https://jsonplaceholder.typicode.com/posts`)
}

export const postById = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  if (!res.ok) {
    throw new Response("Post not found", { status: 404 });
  }

  const data = await res.json();

  // Jika data kosong atau tidak memiliki properti penting:
  if (!data?.id) {
    throw new Response("Post not found", { status: 404 });
  }

  return data;
};