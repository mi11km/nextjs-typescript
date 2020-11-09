import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData, PostData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

interface Props {
  allPostsData: PostData[];
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Home: React.FC<Props> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Hello! My name is Masafumi Ikeyama. I`m a sophomore at The University
          of Electro-Communications. I major in computer science. My hobby is
          playing basketball, listening to music and so on. Thank you for
          reading.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
