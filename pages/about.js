
import EduData from "@/pages/api/edudata";
import EduCard from "@/components/EduCard";
import TechStack from "@/components/TechStack";
import Cta from "@/components/Cta";


function about() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-7">
        <div className="basis-full md:basis-2/3">
          <h1 className="text-4xl font-extrabold mt-3 mb-4">
            Hello! <br />
            My name is Huseyin.
          </h1>
          <h2 className="text-2xl font-extrabold mt-3 mb-4">
            I am a student at Chas Academy, studying to become a better frontend
            developer.
          </h2>
          <p className="mb-3 text-sm md:text-base font-light">
            I have a passion for designing and developing websites and strive to
            create visually appealing and user-friendly experiences
          </p>
          <p className="mb-3 text-sm md:text-base  font-light">
            I am always eager to learn and explore new technologies and modern
            frameworks to stay up-to-date with the latest industry trends. In my
            free time, I enjoy playing guitar, nature walks, mountain biking,
            and photography.
          </p>
          <p className="mb-3 text-sm md:text-base  font-light">
            I invite you to take a look at my portfolio and past projects to see
            the work I have done, and if you have any questions or would like to
            work together, please feel free to contact me.
          </p>
        </div>
        <div className="basis-full md:basis-1/3 flex items-center justify-center">
        </div>
      </div>

      <TechStack />
      <div className="my-10">
        <h2 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-4xl xl:leading-tight font-bold">
          Education
        </h2>
        <div className="mt-3">
          {EduData.map((edu) => (
            <EduCard key={edu.School} edu={edu} />
          ))}
        </div>
        <Cta />
      </div>
    </>
  );
}
export default about;
