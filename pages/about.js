import Link from "next/link";

const About = () => {
  return (
    <div>
      <p>This is the about page.</p>
      <Link href="/">
        <a>Home Page</a>
      </Link>
    </div>
  );
};

export default About;
