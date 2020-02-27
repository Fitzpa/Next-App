import Link from "next/link";

const Index = () => {
  return (
    <div>
      <p>Hello Next.js</p>
      <Link href="/about"  title="About Page">
        <a>About Page</a>
      </Link>
    </div>
  );
};

export default Index;
