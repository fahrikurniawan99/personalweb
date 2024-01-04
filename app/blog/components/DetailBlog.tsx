import { FaCopy, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Markdown from "react-markdown";
import Container from "../../components/Container";

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
        <Markdown
          className={"text-zinc-700"}
          components={{
            h1: ({ children }) => (
              <h1 className="font-bold text-2xl">{children}</h1>
            ),
          }}
        >
          {content}
        </Markdown>
        {/* <p className="mt-10">
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
        </p> */}
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

const content =
  '---\n__Advertisement :)__\n\n- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image\n  resize in browser.\n- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly\n  i18n with plurals support and easy syntax.\n\nYou will like those projects!\n\n---\n\n# h1 Heading 8-)\n## h2 Heading\n### h3 Heading\n#### h4 Heading\n##### h5 Heading\n###### h6 Heading\n\n\n## Horizontal Rules\n\n___\n\n---\n\n***\n\n\n## Typographic replacements\n\nEnable typographer option to see result.\n\n(c) (C) (r) (R) (tm) (TM) (p) (P) +-\n\ntest.. test... test..... test?..... test!....\n\n!!!!!! ???? ,,  -- ---\n\n"Smartypants, double quotes" and \'single quotes\'\n\n\n## Emphasis\n\n**This is bold text**\n\n__This is bold text__\n\n*This is italic text*\n\n_This is italic text_\n\n~~Strikethrough~~\n\n\n## Blockquotes\n\n\n> Blockquotes can also be nested...\n>> ...by using additional greater-than signs right next to each other...\n> > > ...or with spaces between arrows.\n\n\n## Lists\n\nUnordered\n\n+ Create a list by starting a line with `+`, `-`, or `*`\n+ Sub-lists are made by indenting 2 spaces:\n  - Marker character change forces new list start:\n    * Ac tristique libero volutpat at\n    + Facilisis in pretium nisl aliquet\n    - Nulla volutpat aliquam velit\n+ Very easy!\n\nOrdered\n\n1. Lorem ipsum dolor sit amet\n2. Consectetur adipiscing elit\n3. Integer molestie lorem at massa\n\n\n1. You can use sequential numbers...\n1. ...or keep all the numbers as `1.`\n\nStart numbering with offset:\n\n57. foo\n1. bar\n\n\n## Code\n\nInline `code`\n\nIndented code\n\n    // Some comments\n    line 1 of code\n    line 2 of code\n    line 3 of code\n\n\nBlock code "fences"\n\n```\nSample text here...\n```\n\nSyntax highlighting\n\n``` js\nvar foo = function (bar) {\n  return bar++;\n};\n\nconsole.log(foo(5));\n```\n\n## Tables\n\n| Option | Description |\n| ------ | ----------- |\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\nRight aligned columns\n\n| Option | Description |\n| ------:| -----------:|\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\n\n## Links\n\n[link text](http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ "title text!")\n\nAutoconverted link https://github.com/nodeca/pica (enable linkify to see)\n\n\n## Images\n\n![Minion](https://octodex.github.com/images/minion.png)\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")\n\nLike links, Images also have a footnote style syntax\n\n![Alt text][id]\n\nWith a reference later in the document defining the URL location:\n\n[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"\n\n\n## Plugins\n\nThe killer feature of `markdown-it` is very effective support of\n[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).\n\n\n### [Emojies](https://github.com/markdown-it/markdown-it-emoji)\n\n> Classic markup: :wink: :cry: :laughing: :yum:\n>\n> Shortcuts (emoticons): :-) :-( 8-) ;)\n\nsee [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.\n\n\n### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)\n\n- 19^th^\n- H~2~O\n\n\n### [\\<ins>](https://github.com/markdown-it/markdown-it-ins)\n\n++Inserted text++\n\n\n### [\\<mark>](https://github.com/markdown-it/markdown-it-mark)\n\n==Marked text==\n\n\n### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)\n\nFootnote 1 link[^first].\n\nFootnote 2 link[^second].\n\nInline footnote^[Text of inline footnote] definition.\n\nDuplicated footnote reference[^second].\n\n[^first]: Footnote **can have markup**\n\n    and multiple paragraphs.\n\n[^second]: Footnote text.\n\n\n### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)\n\nTerm 1\n\n:   Definition 1\nwith lazy continuation.\n\nTerm 2 with *inline markup*\n\n:   Definition 2\n\n        { some code, part of Definition 2 }\n\n    Third paragraph of definition 2.\n\n_Compact style:_\n\nTerm 1\n  ~ Definition 1\n\nTerm 2\n  ~ Definition 2a\n  ~ Definition 2b\n\n\n### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)\n\nThis is HTML abbreviation example.\n\nIt converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.\n\n*[HTML]: Hyper Text Markup Language\n\n### [Custom containers](https://github.com/markdown-it/markdown-it-container)\n\n::: warning\n*here be dragons*\n:::\n';
