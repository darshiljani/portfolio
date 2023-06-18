import Image from "next/image";
import type { IconType } from "react-icons";
import { VscGithub } from "react-icons/vsc";
import { FaCodepen } from "react-icons/fa";
import { TfiSkype } from "react-icons/tfi";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";

function SocialLink({ icon: Icon, href }: { icon: IconType; href: string }) {
  return (
    <Link href={href}>
      <Icon />
    </Link>
  );
}

export default function Home() {
  return (
    <div className="container mx-auto text-center flex flex-col lg:flex-row mt-4 lg:mt-0 gap-4 lg:gap-0 lg:justify-around items-center h-screen transition-all">
      <div className="flex flex-col gap-6">
        <div className="text-2xl font-bold text-stroke text-black dark:text-white">
          Hello world!
        </div>
        <div className="text-4xl font-black duration-150 px-4 lg:px-0">
          My name is Darshil Jani
        </div>
        <div className="text-lg duration-300">
          I&apos;m a web developer based in{" "}
          <Link
            href="https://goo.gl/maps/uEUVhV1CCfVHZEAs9"
            className="underline underline-offset-4"
          >
            Ahmedabad, India
          </Link>
        </div>
        <div className="flex justify-center lg:justify-start gap-4 text-3xl duration-500">
          <SocialLink
            icon={VscGithub}
            href="https://www.github.com/darshiljani"
          />
          <SocialLink
            icon={FaCodepen}
            href="https://www.codepen.io/darshiljani"
          />
          <SocialLink
            icon={TfiSkype}
            href="https://join.skype.com/invite/x4dPK9DrXODd"
          />
          <SocialLink
            icon={BsLinkedin}
            href="https://www.linkedin.com/in/darshil-jani-a3195221a"
          />
        </div>
      </div>
      <Image
        alt="Portrait of Darshil"
        width={270}
        height={337.5}
        src="/portrait.jpg"
        className="rounded-lg shadow-2xl dark:shadow-lg shadow-black/50 dark:shadow-white/25 duration-500"
      ></Image>
    </div>
  );
}
