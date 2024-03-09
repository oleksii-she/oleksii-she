import { getPet } from "../../../../sanity/schemas/utils";
import Image from "next/image";
interface IBlogs {
  name: string;
  desc: string;
}

// const getBlogs = async ()=>{
//   const query = `*[_type == 'pet']{
//     name, desc, text
//   }`

// const data = await getPet().
// }

export default async function Portfolio() {
  const blogs = await getPet();

  console.log(blogs, "blogs");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h2>Blogs</h2>
      </section>
    </main>
  );
}
