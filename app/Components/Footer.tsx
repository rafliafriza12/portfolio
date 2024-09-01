import Link from "next/link";
import { Instagram, Github, Mail } from "lucide-react";
const Footer: React.FC = () => {
  return (
    <div className=" w-full h-16 bg-[#2E3138] flex justify-center items-center">
      <div className="px-10 lg:pl-20 lg:pr-10 w-full flex justify-between items-center">
        <div className="hidden lg:flex gap-3 lg:gap-10 text-gray-400 text-xs lg:text-base">
          <Link className=" hover:underline" href={"#"}>Instagram</Link>
          <Link className=" hover:underline" href={"#"}>Email</Link>
          <Link className=" hover:underline" href={"#"}>Github</Link>
        </div>
        <div className=" w-full flex lg:hidden justify-start items-center gap-7">
            <Instagram
              color="#888888"
            />
            <Mail
              color="#888888"
            />
            <Github
             color="#888888"
            />
          </div>

        <div className=" flex items-center">
          <span className="text-[7px] lg:text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link href={"#"} className="hover:underline">
              Rafli Afriza Nugraha
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
