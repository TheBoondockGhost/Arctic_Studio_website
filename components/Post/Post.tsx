import { Card, Figure, Title, Content } from "./style";
import Link from "next/link";

export const Post = () => {
	return (
		<Link href="" passHref>
			<Card>
				<Figure>
					<img alt="Post Photo" src="/image1.jpg" />
				</Figure>
				<Title>Post title!</Title>
				<Content>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, possimus a! Voluptatem voluptates exercitationem tenetur atque consequatur! Dicta totam quidem repudiandae temporibus, exercitationem ex adipisci ut voluptatibus at libero nostrum.
					</p>
				</Content>
			</Card>
		</Link>
	)
}