import { Api } from "@/app/libs/api";

type BaseResponse<D> = {
  data: D;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type BlogPost<T> = {
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  thumbnail: T;
  content: string;
};

type BlogPostResponse = {
  id: number;
  attributes: BlogPost<Thumbnail>;
};

export class BlogService {
  constructor() {}
  async getBlogList() {
    try {
      const response: BaseResponse<BlogPostResponse[]> = await Api.get(
        "/blogs?populate=*"
      );
      const data = response.data.map(({ attributes, id }) => {
        let { thumbnail, ...attributesNotWithThumbnail } = attributes;
        console.log(attributes);

        const thumbnailUrl = thumbnail.data.attributes.url;

        return {
          id,
          ...attributesNotWithThumbnail,
          thumbnail: thumbnailUrl,
        };
      });
      return Promise.resolve({ meta: response.meta, data });
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async getBlogDetail(slug: string) {
    try {
      const response: BaseResponse<BlogPostResponse[]> = await Api.get(
        `/blogs?populate=*&filters[slug][$eq]=${slug}`
      );
      const thumbnailUrl =
        response.data[0].attributes.thumbnail.data.attributes.url;
      const data = {
        ...response.data[0].attributes,
        thumbnail: thumbnailUrl,
      } as BlogPost<string>;
      return Promise.resolve({ meta: response.meta, data });
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
