import type { NextPage } from 'next'

import Header from "../src/components/Header";
import Bio from "../src/components/Bio";
import Blog from "../src/components/Blog";

const Home: NextPage = () => {
  return (
    <div className="body-container">
      <Header />
      {/* <h4>EM CONSTRUÇÃO</h4>
      <hr />
      <h2>
        <a href="https://github.com/lucassdesouza0">Github</a>
      </h2>
      <h2>
        <a href="https://www.linkedin.com/in/lucassdesouza0/">Linkedin</a>
      </h2> */}
      <Bio />
      <Blog />
    </div>
  );
};

export default Home;
