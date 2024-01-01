import React from "react";
import Container from "../../components/Container";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { FaCopy, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function DetailBlog() {
  return (
    <>
      <Container className="my-20">
        <div className="w-full h-[500px] aspect-video bg-zinc-400"></div>
        <h1 className="font-bold text-3xl text-zinc-700 mt-10">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="text-zinc-500 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum
          obcaecati doloremque sapiente, iusto dolor maiores odit dolores
          laborum dicta assumenda enim minus autem voluptas error eum quae sunt
          vitae.
        </p>
        <div className="flex justify-between items-center mb-10">
          <div className="flex mt-8 gap-3 items-center">
            <div className="h-16 aspect-square bg-zinc-500 rounded-full"></div>
            <div className="">
              <h1 className="font-bold text-blue-950 text-xl">
                Fahri Kurniawan
              </h1>
              <p className="tracking-tight text-zinc-500 -mt-1">
                Frontend Developer
              </p>
            </div>
          </div>
          <span>11 Days Ago</span>
        </div>
        <p className="mt-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          itaque reiciendis repellendus cumque perspiciatis architecto quidem
          pariatur, esse provident iure, possimus porro fugiat labore excepturi
          et maiores cupiditate cum tempora. Suscipit beatae amet, quam, nulla
          alias nesciunt consequuntur cum error incidunt architecto et
          repudiandae dolore saepe, vitae dolorem! Id, sint atque dolores soluta
          incidunt cumque debitis natus, fugit numquam, harum laudantium veniam
          reprehenderit perferendis assumenda. Id error corporis quod laboriosam
          non, placeat cum maiores repellat recusandae iste quibusdam eos vel
          corrupti ex, illo iusto doloribus? Quae cumque aspernatur autem neque
          provident expedita pariatur culpa delectus hic laborum fugiat quaerat
          aut impedit atque sequi voluptatum, vitae accusamus id voluptas
          temporibus tenetur asperiores. Necessitatibus eius optio laudantium
          commodi dolore similique modi earum magni autem aut natus facilis
          vitae, non et corporis harum officiis exercitationem aliquid nam.
          Possimus, placeat, nulla eaque totam at, deserunt quis minus facilis
          in perspiciatis maiores dolorum incidunt necessitatibus accusantium
          ullam nobis dicta! Ullam reprehenderit quos ad quibusdam nobis?
          Explicabo accusantium fugiat aspernatur odio, quidem rerum animi
          distinctio asperiores alias ipsa minus sunt hic veniam id omnis ex
          impedit natus consectetur, illum sed placeat. Consectetur similique
          eligendi rerum esse omnis, ab minus reiciendis. Cumque dolorum a
          tenetur molestiae culpa!
        </p>
        <p className="mt-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          itaque reiciendis repellendus cumque perspiciatis architecto quidem
          pariatur, esse provident iure, possimus porro fugiat labore excepturi
          et maiores cupiditate cum tempora. Suscipit beatae amet, quam, nulla
          alias nesciunt consequuntur cum error incidunt architecto et
          repudiandae dolore saepe, vitae dolorem! Id, sint atque dolores soluta
          incidunt cumque debitis natus, fugit numquam, harum laudantium veniam
          reprehenderit perferendis assumenda. Id error corporis quod laboriosam
          non, placeat cum maiores repellat recusandae iste quibusdam eos vel
          corrupti ex, illo iusto doloribus? Quae cumque aspernatur autem neque
          provident expedita pariatur culpa delectus hic laborum fugiat quaerat
          aut impedit atque sequi voluptatum, vitae accusamus id voluptas
          temporibus tenetur asperiores. Necessitatibus eius optio laudantium
          commodi dolore similique modi earum magni autem aut natus facilis
          vitae, non et corporis harum officiis exercitationem aliquid nam.
          Possimus, placeat, nulla eaque totam at, deserunt quis minus facilis
          in perspiciatis maiores dolorum incidunt necessitatibus accusantium
          ullam nobis dicta! Ullam reprehenderit quos ad quibusdam nobis?
          Explicabo accusantium fugiat aspernatur odio, quidem rerum animi
          distinctio asperiores alias ipsa minus sunt hic veniam id omnis ex
          impedit natus consectetur, illum sed placeat. Consectetur similique
          eligendi rerum esse omnis, ab minus reiciendis. Cumque dolorum a
          tenetur molestiae culpa!
        </p>
        <p className="text-center mt-32 text-zinc-500">Share this Article</p>
        <div className="justify-center flex mt-3 gap-4 ">
          <button className="h-12 rounded bg-green-600 aspect-square flex justify-center items-center">
            <FaWhatsapp className="text-white text-xl" />
          </button>
          <button className="h-12 rounded bg-blue-600 aspect-square flex justify-center items-center">
            <FaFacebook className="text-white text-xl" />
          </button>
          <button className="h-12 rounded bg-gray-400 to-blue-500 aspect-square flex justify-center items-center">
            <FaCopy className="text-white text-xl" />
          </button>
          <button className="h-12 rounded bg-blue-500 aspect-square flex justify-center items-center">
            <FaTwitter className="text-white text-xl" />
          </button>
        </div>
      </Container>
    </>
  );
}
