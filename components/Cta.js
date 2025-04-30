const Cta = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-700 my-11 rounded-2xl">
      <div className="py-10 px-4 mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-screen-sm text-center">
          
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-white">
            Let’s Build Something Together
          </h2>
          <p className="mb-6 font-light text-white text-md">
            I'm open to new opportunities and currently accepting internship and
            job applications.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <a className="button large secondary rm" href="/contact">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
