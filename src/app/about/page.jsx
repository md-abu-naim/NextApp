import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="bg-black rounded-xl shadow-md p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          About Me
        </h1>

        <p className=" mb-4">
          Hello! I’m Mohammad Abu Naim, a passionate web developer specializing in
          building modern and responsive web applications using React, Node.js,
          Express, and MongoDB. I love turning ideas into functional and
          visually appealing digital products.
        </p>

        <p className=" mb-4">
          My goal is to continuously learn and improve my skills while
          contributing to meaningful projects. I enjoy working both
          independently and collaboratively in team environments.
        </p>

        <p className=" mb-4">
          When I’m not coding, I like exploring new technologies, reading tech
          blogs, and improving my problem-solving abilities through
          challenges and real-world projects.
        </p>

        <div className="mt-6 text-center text-gray-400 text-sm">
          Feel free to check out my work and get in touch via the <Link href='/contacts' className='underline text-blue-700'>Contact page</Link>!
        </div>
      </div>
    </div>
  );
};

export default About;