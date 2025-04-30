import StackIcon from "tech-stack-icons";

const TechStack = () => {
  return (
    <div className="py-8">
      <div className="">
        <h2 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-4xl xl:leading-tight font-bold">
          My tech stack
        </h2>
        <p className="mb-8 font-light">
          Programming Languages, JS Frameworks & Libraries & Tools I've been
          working with recently.
        </p>

        <div className="grid grid-cols-3 md:grid-cols-8 gap-2">
          <div className="flex flex-col justify-cente items-center">
            <StackIcon name="html5" className="p-2 size-16" />
            <p className="text-xs">Html 5</p>
          </div>

          <div className="flex flex-col justify-cente items-center">
            <StackIcon name="js" className="p-2 size-16" />
            <p className="text-xs">JS</p>
          </div>
          <div className="flex flex-col justify-cente items-center">
            <StackIcon name="reactjs" className="p-2 size-16" />
            <p className="text-xs">React JS</p>
          </div>
          <div className="flex flex-col justify-cente items-center">
            <StackIcon name="nextjs2" className="p-2 size-16 dark:invert" />
            <p className="text-xs">Next JS</p>
          </div>
          
          <div className="flex flex-col justify-cente items-center">
            <StackIcon name="vitejs" className="p-2 size-16" />
            <p className="text-xs">Vite JS</p>
          </div>
          <div className="flex flex-col justify-cente items-center">
            <StackIcon name="vuejs" className="p-2 size-16" />
            <p className="text-xs">Vue JS</p>
          </div>
          <div className="flex flex-col justify-cente items-center">
            <StackIcon name="nuxtjs" className="p-2 size-16" />
            <p className="text-xs">Nuxt JS</p>
          </div>
          <div className="flex flex-col justify-cente items-center">
            <StackIcon name="git" className="p-2 size-16" />
            <p className="text-xs">Git</p>
          </div>
          
          <div className="flex flex-col justify-cente items-center">
            <StackIcon name="redux" className="p-2 size-16" />
            <p className="text-xs">Redux</p>
          </div>
          
          <div className="flex flex-col justify-cente items-center">
            <StackIcon name="github" className="p-2 size-16 dark:invert" />
            <p className="text-xs">Github</p>
          </div>
          <div className="flex flex-col justify-cente items-center">
            <StackIcon name="vscode" className="p-2 size-16" />
            <p className="text-xs">VS Code</p>
          </div>
          
          <div className="flex flex-col justify-cente items-center">
            <StackIcon name="figma" className="p-2 size-16" />
            <p className="text-xs">Figma</p>
          </div>
          <div className="flex flex-col justify-cente items-center">
            <StackIcon name="tailwindcss" className="p-2 size-16" />
            <p className="text-xs">Tailwind CSS</p>
          </div>
          
          <div className="flex flex-col justify-cente items-center">
            <StackIcon name="radixui" className="p-2 size-16 dark:invert" />
            <p className="text-xs">Radix UI</p>
          </div>
          
          <div className="flex flex-col justify-cente items-center">
            <StackIcon name="aws" className="p-2 size-16 dark:invert" />
            <p className="text-xs">AWS</p>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default TechStack;
