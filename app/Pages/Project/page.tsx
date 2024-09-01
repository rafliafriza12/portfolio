import Navbar from "@/app/Components/Navbar";
import Image from "next/image";
import Link from "next/link";
const Project: React.FC = () => {
  return (
    <div className=" w-screen flex">
      <Navbar />
      <div className=" w-[76%] bg-[#1E252D] overflow-x-hidden flex flex-col items-start gap-20   pt-14">
        <div className=" w-full text-center text-white text-4xl font-extrabold">
          <h1 className=" inline pb-2 border-b-[1px] border-gray-600">
            Project
          </h1>
        </div>

        <div className=" w-full flex justify-between items-center pr-10 pl-20 ">
          <div className=" w-[50%] h-auto relative">
            <div className=" w-[500px] h-[500px] absolute -top-72 -left-10 blur-[50px] blob">
                <Image
                src={"/img/blob.png"}
                alt="Blob"
                layout="fill"
                objectFit="fill"/>
            </div>
            <div className=" w-[60%] h-[190px] absolute left-20 -top-44 overflow-hidden rounded-md border-[1px] border-[#888888] shadow-[0px_0px_8px_#888888]">
              <Image
                src={"/img/hmif-site1.png"}
                alt="hmif site"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className=" w-[60%] h-[190px] absolute -left-6 -top-24 overflow-hidden rounded-md border-[1px] border-[#888888] shadow-[0px_0px_8px_#888888] z-[2]">
              <Image
                src={"/img/hmif-site2.png"}
                alt="hmif site"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className=" w-[60%] h-[190px] absolute right-12 -top-5 overflow-hidden rounded-md border-[1px] border-[#888888] shadow-[0px_0px_8px_#888888] z-[1]">
              <Image
                src={"/img/hmif-site3.png"}
                alt="hmif site"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className=" w-[50%] flex flex-col items-start gap-8 pl-5">
            <div className=" text-white font-bold text-2xl">
              <h1 className="">HMIF Site</h1>
            </div>
            <p className=" text-gray-400 text-sm">
              I have completed developing a landing page for the Informatics
              Student Association using Next.js TypeScript. The project includes
              a responsive and modern interface design, with optimized
              performance to ensure a seamless user experience across devices.
              By leveraging the advantages of server-side rendering and
              efficient routing from Next.js, I was able to create pages that
              were fast, secure, and easy to manage, while meeting the
              organization's needs in conveying information to students
              effectively.
              <br />
              <br />
              <Link
                href="https://github.com/Himpunan-Mahasiswa-Informatika/hmif-frontpage"
                target="_blank"
                className=" underline"
              >
                https://github.com/Himpunan-Mahasiswa-Informatika/hmif-frontpage
              </Link>
            </p>
            <h1 className=" w-full text-gray-400 font-bold  pb-2 border-b-[1px] border-[#888888]">
              Himpunan Mahasiswa Informatika
            </h1>
            <div className=" w-full flex justify-between items-center text-gray-400 pb-2 border-b-[1px] border-[#888888]">
              <h1>Date</h1>
              <h1>5 July 2024</h1>
            </div>
            <div className=" w-full flex justify-between items-center text-gray-400 pb-2 border-b-[1px] border-[#888888]">
              <h1>Category</h1>
              <h1>Landing Page</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
