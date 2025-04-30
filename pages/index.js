import Cta from "@/components/Cta";
// import HomeProjects from "@/components/HomeProjects";
import MainHero from "@/components/MainHero";
import MarqueeHome from "@/components/MarqueeHome";
import HomeProjects from "@/components/HomeProjects";
import Head from "next/head";

export const metadata = {
  title: "Chas Portfollio",
  description: "Chas portfollio uppgift",
};

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Huseyin Akan Portfollio - Home</title>
        </Head>
      </div>
      <MainHero />
      <MarqueeHome />
      <HomeProjects />
      <Cta />
    </>
  );
}
