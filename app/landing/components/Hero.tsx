import clsx from "clsx";
import Link from "next/link";
import Container from "../../components/Container";
import { SocialMedia } from "../constants/dummyHero";

export default function Hero() {
  return (
    <>
      <div className="bg-gradient-to-r from-white to-sky-100">
        <Container className="h-[calc(100vh-80px)] flex flex-col justify-center tracking-tight">
          <h1 className="sm:text-3xl text-xl font-bold text-sky-800 tracking-tighter">
            Hello World 👋
          </h1>
          <h2 className="sm:mt-2 tracking-tighter leading-relaxed font-bold text-3xl sm:text-5xl text-sky-900 sm:w-[70%]">
            I am a Frontend Web Developer living in Indonesia.
          </h2>
          <p className="tetx-sm sm:text-xl mt-16 font-semibold text-zinc-500">
            Get to know me better 👇
          </p>
          <div className="flex mt-3 gap-4">
            {SocialMedia.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.url}
                  target="_blank"
                  className={clsx(
                    "h-10 sm:h-12 rounded  aspect-square flex justify-center items-center",
                    item.bgColorClass
                  )}
                >
                  {item.contentIcon}
                </Link>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
}
