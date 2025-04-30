import { ContactForm } from "@/components/ContactForm";


function contact() {
  return (
    <div className="flex flex-col md:flex-row gap-7">
      <div className="basis-full md:basis-1/2 flex flex-col justify-center">
        <h1 className="text-5xl font-extrabold mt-3 mb-8">
          Let’s
          <br />
          <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            Build Your Vision
          </span>{" "}
          Together
        </h1>
        <p className="mb-3 text-sm md:text-base font-light">
        Feel free to reach out via the form or through my social links below. I'm happy to answer any questions you may have.
        </p>
        <div className="flex gap-3 justify-center md:justify-start mt-8">
          
        </div>
      </div>
      <div className="basis-full md:basis-1/2">
        <ContactForm />
      </div>
    </div>
  );
}
export default contact;
