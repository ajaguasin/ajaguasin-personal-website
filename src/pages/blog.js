import React from "react";
import Layout from "../components/layout";
import { StaticQuery } from "gatsby";

const BlogPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          gcms {
            posts {
              title
              content
            }
          }
        }
      `}
      render={data => {
        console.log(data);
        if (!data.gcms) {
          return <p>Loading…</p>;
        }
        return (
          <>
            {data.gcms.posts.map((d, key) => (
              <div key={key}>
                <p>{d.title}</p>
                <p>{d.content}</p>
              </div>
            ))}
          </>
        );
      }}
    />
  </Layout>
);

export default BlogPage;
