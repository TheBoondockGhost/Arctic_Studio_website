import { Section } from "../Section";
import { Post, Category } from "../../shared/types";

type GalleryProps = {
    posts: Post[],
    categories: Category[]
}

export const Feed = ({ posts, categories }: GalleryProps) => {
    return (
        <>
            {categories.map((currentCategory) => {
                const inSection = posts.filter(
                    (post) => post.category === currentCategory
                )
                return (
                    <Section
                        key={currentCategory}
                        title={currentCategory}
                        posts={inSection}
                    />
                )
            })}
        </>
    )
}