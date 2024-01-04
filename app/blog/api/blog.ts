import { Api } from "@/app/libs/api";

export class BlogService {
  constructor() {}
  async getBlogList() {
    try {
      const response: {
        meta: Object;
        data: Array<{ attributes: Object; id: number }>;
      } = await Api.get("/blogs?populate=*");
      const data = response.data.map(({ attributes, id }) => {
        let { thumbnail, ...attributesNotWithThumbnail } = attributes as any;
        console.log(attributes);

        thumbnail = thumbnail.data.attributes.url;

        return {
          id,
          ...attributesNotWithThumbnail,
          thumbnail,
        };
      });
      return Promise.resolve({ meta: response.meta, data });
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
