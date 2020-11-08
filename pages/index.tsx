import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello! My name is Masafumi Ikeyama. I`m a sophomore at The University of
          Electro-Communications. I major in computer science. My hobby is
          playing basketball, listening to music and so on. Thank you for
          reading.
        </p>
      </section>
    </Layout>
  );
}
