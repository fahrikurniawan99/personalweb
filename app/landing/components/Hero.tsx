import clsx from "clsx";
import Link from "next/link";
import Container from "../../components/Container";
import { SocialMedia } from "../constants/dummyHero";

export default function Hero() {
  return (
    <>
      <div className="bg-gradient-to-r from-white to-sky-100">
        <Container className="h-[calc(100vh-80px)] flex flex-col justify-center tracking-tight">
          <h1 className="text-2xl font-bold text-sky-900">Hello World 👋</h1>
          <h2 className="mt-1 font-bold text-4xl text-sky-900">
            Discover what awaits within
          </h2>
          <p className="text-lg md:text-2xl tracking-tight leading-relaxed mt-3 text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            aspernatur cupiditate laboriosam maiores minima beatae totam
            reiciendis voluptas. Velit itaque dignissimos fuga nesciunt beatae?
            Sequi dolorum nemo voluptatem quas tempore!
          </p>
          <p className="text-xl mt-20 font-semibold text-zinc-500">
            Touch me in 👇
          </p>
          <div className="flex mt-3 gap-4">
            {SocialMedia.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.url}
                  target="_blank"
                  className={clsx(
                    "h-12 rounded  aspect-square flex justify-center items-center",
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
