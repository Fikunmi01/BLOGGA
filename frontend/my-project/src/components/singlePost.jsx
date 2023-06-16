import { Link } from "react-router-dom";

export const SinglePost = () => {
  const postArray = [
    {
      id: 1,
      date: "27 MAY",
      title: "15 Disadvantages of Freedom And How You Can Workaround It.",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt autem dicta ratione commodi. Excepturi nesciunt, aliquid esse, ipsa voluptates, magni dolor quo saepe nemo accusamus sint deserunt ut vitae delectus?",
      trendTag1: "meditation",
      trendTag2: "mentalpeace",
      username: "Hiphonic",
    },
    {
      id: 2,
      date: "24 MAY",
      title: "The Death Of Freedom.",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt autem dicta ratione commodi. Excepturi nesciunt, aliquid esse, ipsa voluptates, magni dolor quo saepe nemo accusamus sint deserunt ut vitae delectus?",
      trendTag1: "anarchy",
      trendTag2: "silence",
      username: "3FK5",
    },
    {
      id: 3,
      date: "22 MAY",
      title: "Achieving Your Goals A Book by Brian Tracey .",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt autem dicta ratione commodi. Excepturi nesciunt, aliquid esse, ipsa voluptates, magni dolor quo saepe nemo accusamus sint deserunt ut vitae delectus?",
      trendTag1: "books",
      trendTag2: "tracey",
      username: "Fowowe",
    },

  ];
  return (
    <>
      {postArray.map((post) => {
        return (
          <div className="flex lg:gap-5 mb-7 px-2 flex-col lg:flex-row" key={post.id}>
            <div className="flex lg:gap-16 mb-3 lg:mb-0 flex-col ">
              <h1 className="font-sans text-white text-2xl lg:text-3xl">{post.date}</h1>
              <p className="text-white lg:relative left-1 text-sm lg:-rotate-90">@{post.username}</p>
            </div>
            <div className="relative">
              <h1 className="text-[#279af1] lg:w-4/5 text-2xl lg:text-3xl font-bold">
                {post.title}
              </h1>
              <p className="lg:w-4/5 lg:top-5 lg:text-lg text-white relative">
                {post.details}
                <Link to="/" className="text-[#279af1]">
                  ...read more
                </Link>
              </p>

              <div className="flex mt-5 gap-5 lg:mt-10">
                <p className="px-4 text-[#279af1] text-xs py-1 border-[#279af1] border-2 rounded-full">
                  #{post.trendTag1}
                </p>
                <p className="px-4 text-[#279af1] text-xs py-1 border-[#279af1] border-2 rounded-full">
                  #{post.trendTag2}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
