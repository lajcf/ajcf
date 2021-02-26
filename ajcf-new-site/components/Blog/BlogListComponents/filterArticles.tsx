import { ArticlePreviewFragment, BlogCategory, BlogLabel } from "../../../types/types";

export const filterArticles = (
  articles: ArticlePreviewFragment[],
  selectedBlogCategoryOrLabel?: BlogCategory | BlogLabel
) => {
  if (!selectedBlogCategoryOrLabel) {
    return articles;
  }
  if (Object.values(BlogCategory).includes(selectedBlogCategoryOrLabel as BlogCategory)) {
    return articles.filter((article) => article.blogCategory.includes(selectedBlogCategoryOrLabel));
  }
  return articles.filter((article) => article.blogLabels.includes(selectedBlogCategoryOrLabel as BlogLabel));
};
