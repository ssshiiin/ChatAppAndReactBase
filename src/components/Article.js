import { useState } from "react"
import Title from "./Title"
import Content from "./Content"
import Publishbutton from "./PublishButton"
import InputText from "./InputText"
import Counter from "./Counter"

const Article = (props) => {
    const [isPublished, setIsPublished] = useState(false);
    const publishArticle = () => {
    setIsPublished(true)};
    return (
        <div>
            <Counter />
            <InputText />
            <Title title = {props.title} />
            <Content content = {props.content} />
            <Publishbutton ispublished = {isPublished} onClick = {publishArticle}>公開</Publishbutton>
        </div>
    );
};

export default Article;