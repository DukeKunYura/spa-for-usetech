import { FC } from "react";
import { useGetPostByIdQuery, useGetPostsQuery } from "../../api/jsonplaceholderApi";
import { skipToken } from "@reduxjs/toolkit/dist/query";

const TestSkip: FC = () => {
    const { data: posts } = useGetPostsQuery();
    const { data: post } = useGetPostByIdQuery(posts ?? skipToken);


    return (
        <>
            <div>TestSkip</div>
            {post?.body}
        </>


    )
}
export default TestSkip;
