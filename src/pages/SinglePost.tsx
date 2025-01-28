import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Comment, Content, IContent, Like, Review, User } from "../types";
import { IContent } from "../types";
// import axios from "axios";
import BasicInfoCard from "../components/BasicInfoCard";
// import Button from "../components/Button";
// import CommentsSection from "../components/CommentsSection";
// import ReviewSection from "../components/ReviewSection";
import { useGetContentByIDQuery } from "../slices/contentApiSlice_Lwa";

const SinglePost = () => {
  // const [filteredContent, setFilteredContent] = useState<Content | null>(null);
  // const [comments, setComments] = useState<Comment[] | null>([]);
  // const [likes, setLikes] = useState<Like[] | []>([]);
  // const [previews, setPreviews] = useState<Review[] | null>(null);

  // const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(false);
  // const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);

  // const [likesCount, setLikesCount] = useState<number>(0);
  // const [toggleLikes, setToggleLikes] = useState<boolean>(true);
  // const isReviewer = true;

  const { id, username } = useParams();
  const [content, setContent] = useState<IContent>();
  const { data, isLoading } = useGetContentByIDQuery({ id: id });

  useEffect(() => {
    if (data) setContent(data);
  }, [data]);

  return (
    <div className='bg-white h-full m-4'>
      {isLoading ? (
        <p>Loading...</p>
      ) : content ? (
        <div className='mb-4 text-justify  w-full  md:w-[90%] mx-auto'>
          <BasicInfoCard
            title={content.title}
            author={username || content.userId.username}
            description={content.description}
            image={content.image}
          >
            {/* <Button
              name={`Likes (${likes?.length + likesCount})`}
              buttonFunction={() => {
                if (toggleLikes) {
                  setLikesCount(likesCount + 1);
                } else {
                  setLikesCount(likesCount - 1);
                }
                setToggleLikes((prev) => !prev);
              }}
            />
            <Button
              name={`Comments (${comments?.length})`}
              buttonFunction={() =>
                setIsCommentsOpen((prevState) => !prevState)
              }
            />
            {isReviewer && (
              <Button
                name={`Review (${previews?.length})`}
                buttonFunction={() =>
                  setIsReviewOpen((prevState) => !prevState)
                }
              />
            )} */}
          </BasicInfoCard>

          {/* <div
            className='my-10'
            dangerouslySetInnerHTML={{
              __html: content.body.replace(/\n\n/g, "<br><br>"),
            }}
          /> */}
          {/* <CommentsSection
            isOpen={isCommentsOpen}
            setIsOpen={setIsCommentsOpen}
            data={comments}
          />
          <ReviewSection
            isOpen={isReviewOpen}
            setIsOpen={setIsReviewOpen}
            title={content.title}
          /> */}
        </div>
      ) : (
        <p>Content not found.</p>
      )}
    </div>
  );
};

export default SinglePost;
