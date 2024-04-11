import React from "react";
import { FaRegComment } from "react-icons/fa";
import SideBar from "../SideBar";
import "./discovery.css";
import { useState } from "react";
import MuiSidebar from "../MuiSidebar";

export default function Discovery() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`row ${sidebarOpen ? "main-container-margin" : ""}`}>
      <MuiSidebar />
      <div className="align-right main-container">
        <div className="main-margin">
          <p>Welcome back,</p>
          <div className="column">
            <div className="display-flex">
              <h2 className="anil-metcha">A</h2>
              <h3 className="h3heading">Anilmatcha</h3>
            </div>
            <input
              type="search"
              className="search"
              placeholder="Search for charecters"
            />
          </div>
          <div className="display-flex flex-wrap">
            <div className="bg-container">
              <p className="question">What do you want?</p>
              <h3 className="epic">Epic challanges await</h3>
            </div>
            <div className="card card-1-radius">
              <div className="puzzle">
                <img
                  className="puzzle-img"
                  src="https://media.istockphoto.com/id/1283755263/vector/%C3%B0%C3%B1%C3%B0%C3%B0%C3%B0%C3%B0%C3%B1%C3%B0%C2%B5-rgb.jpg?s=612x612&w=0&k=20&c=Goi7FxqIXm-e5XNRVyx-DNFdZ6CHhiqNtvA-O_T2rsY="
                  alt="puzzle"
                />
                <p>Puzzle Prodigy</p>
              </div>
              <p className="puzzle-para">
                Greetings I'm Puzzle Prodigy,ready to lead you through a maze of
                mind-boggling puzzles
              </p>
              <p className="reply">Reply...</p>
            </div>
            <div className="card">
              <div className="puzzle">
                <img
                  className="puzzle-img"
                  src="https://media.istockphoto.com/id/1198111114/photo/escape-room-concept-vintage-golden-key-and-opened-padlock-web-banner.jpg?s=612x612&w=0&k=20&c=12neqFTOQXc7tABXUDLj_r-oEprGbosfSF04NGpFrhw="
                  alt="puzzle"
                />
                <p>Puzzle Prodigy</p>
              </div>
              <p className="puzzle-para">
                Greetings I'm Puzzle Prodigy,ready to lead you through a maze of
                mind-boggling puzzles
              </p>
              <p className="reply">Reply...</p>
            </div>
          </div>
          <h2 className="for-you">For you</h2>
          <div className="display-flex flex-wrap">
            <div className="amine-container">
              <img
                src="https://cdn.pixabay.com/photo/2022/12/25/04/42/satoru-gojo-7676809_1280.jpg"
                alt="korean"
                className="anime"
              />
              <div>
                <p className="details bold">Gojou Satoru</p>
                <p className="details">By@Ethar_24</p>
                <p className="details">I help with eriting</p>
                <div className="display-flex">
                  <div>
                    <FaRegComment className="details comments" />
                  </div>
                  <p className="details">90.1k</p>
                </div>
              </div>
            </div>
            <div className="amine-container">
              <img
                src="https://cdn.pixabay.com/photo/2020/10/30/05/33/hand-5697758_640.png"
                alt="korean"
                className="anime"
              />
              <div>
                <p className="details bold">Writing Buddy</p>
                <p className="details">By @GengarGhast</p>
                <p className="details">I help with creating</p>
                <div className="display-flex">
                  <div>
                    <FaRegComment className="details comments" />
                  </div>
                  <p className="details">359.4k</p>
                </div>
              </div>
            </div>

            <div className="amine-container">
              <img
                src="https://cdn.pixabay.com/photo/2023/07/23/03/57/ai-generated-8144395_640.png"
                alt="korean"
                className="anime"
              />
              <div>
                <p className="details bold">INFJ Boyfriend</p>
                <p className="details">By @serafinya</p>
                <p className="details">Emhatic,reserved,and idealistic </p>
                <div className="display-flex">
                  <div>
                    <FaRegComment className="details comments" />
                  </div>
                  <p className="details">1.2m</p>
                </div>
              </div>
            </div>
            <div className="amine-container">
              <img
                src="https://cdn.pixabay.com/photo/2023/07/23/01/26/energetic-8144305_640.jpg"
                alt="korean"
                className="anime"
              />
              <div>
                <p className="details bold">Continue</p>
                <p className="details">By@Ethar_24</p>
                <p className="details">I help with eriting</p>
                <div className="display-flex">
                  <div>
                    <FaRegComment className="details comments" />
                  </div>
                  <p className="details">90.1k</p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="for-you">Try these</h2>
          <div className="display-flex flex-wrap">
            <div className="try-container ">
              <img
                src="https://cdn.pixabay.com/photo/2017/01/12/13/23/map-1974699_640.png"
                alt="korean"
                className="try-container-img"
              />
              <div>
                <p className="details bold">Practice a new language</p>
                <p className="details-with"> with HyperGlot</p>
              </div>
            </div>
            <div className="try-container">
              <img
                src="https://cdn.pixabay.com/photo/2023/06/28/08/13/public-speaking-8093767_640.png"
                alt="korean"
                className="try-container-img"
              />
              <div>
                <p className="details bold">Practice interviewing</p>
                <p className="details-with"> with Interviewer</p>
              </div>
            </div>
            <div className="try-container margin-bottom">
              <img
                src="https://cdn.pixabay.com/photo/2023/02/10/08/00/woman-7780330_640.png"
                alt="korean"
                className="try-container-img"
              />
              <div>
                <p className="details bold">Brainstrom Ideas</p>
                <p className="details-with"> with Brainstromer</p>
              </div>
            </div>

            <div className="try-container margin-bottom">
              <img
                src="https://cdn.pixabay.com/photo/2014/05/31/23/16/teacher-359311_1280.png"
                alt="korean"
                className="try-container-img"
              />
              <div>
                <p className="details bold">Get book read</p>
                <p className="details-with"> with Librarians</p>
              </div>
            </div>
            <div className="try-container margin-top">
              <img
                src="https://cdn.pixabay.com/photo/2024/02/21/08/44/woman-8587090_1280.png"
                alt="korean"
                className="try-container-img"
              />
              <div>
                <p className="details bold">Plan a trip</p>
                <p className="details-with"> with Trip Planner</p>
              </div>
            </div>
            <div className="try-container margin-top">
              <img
                src="https://cdn.pixabay.com/photo/2013/08/26/11/04/quill-175980_640.png"
                alt="korean"
                className="try-container-img"
              />
              <div>
                <p className="details bold">Write a story</p>
                <p className="details-with"> with Creative Helpers</p>
              </div>
            </div>
            <div className="try-container margin-top">
              <img
                src="https://media.istockphoto.com/id/491219472/photo/family-game-evening-with-self-made-board-game.jpg?s=612x612&w=0&k=20&c=Sw6TDWS-uY_r4REfRtT_Ap1-tMPyp4_1xaa4i3RB7hI="
                alt="korean"
                className="try-container-img"
              />
              <div>
                <p className="details bold">Play a game</p>
                <p className="details-with"> with Gamer</p>
              </div>
            </div>
            <div className="try-container margin-top">
              <img
                src="https://media.istockphoto.com/id/1145924471/photo/young-woman-meditating-on-the-beach-at-full-moon.jpg?s=612x612&w=0&k=20&c=EfmOE7jjzwFycUpkmp7slMwULb6H5WMFj3aHsVWfx2k="
                alt="korean"
                className="try-container-img"
              />
              <div>
                <p className="details bold">Help me meditation</p>
                <p className="details-with"> with Decision</p>
              </div>
            </div>
          </div>
          <h2 className="for-you">Featured</h2>
          <div className="display-flex flex-wrap">
            <div className="amine-container">
              <img
                src="https://media.istockphoto.com/id/1447609582/vector/bot-robot-icon-on-red-background-with-shadow.jpg?s=612x612&w=0&k=20&c=XNKCNEsWzXHuPL50MGJ80FyvrppMtlxrAtJBTFn62RE="
                alt="korean"
                className="anime"
              />
              <div>
                <p className="details bold">Character Assistant</p>
                <p className="details">By @landon</p>
                <p className="details">Your AI work</p>
                <div className="display-flex">
                  <div>
                    <FaRegComment className="details comments" />
                  </div>
                  <p className="details">123.4m</p>
                </div>
              </div>
            </div>
            <div className="amine-container">
              <img
                src="https://cdn.pixabay.com/photo/2024/03/30/14/31/ai-generated-8664836_640.jpg"
                alt="korean"
                className="anime"
              />
              <div>
                <p className="details bold">Hoshino Ai</p>
                <p className="details">By @VCavaller</p>
                <p className="details">From Oshi No</p>
                <div className="display-flex">
                  <div>
                    <FaRegComment className="details comments" />
                  </div>
                  <p className="details">90.1k</p>
                </div>
              </div>
            </div>

            <div className="amine-container">
              <img
                src="https://media.istockphoto.com/id/1386179448/vector/k-pop-style-shoujo-manga-illustration-of-a-black-hair-handsome-princeand-smiling-rakishly.jpg?s=612x612&w=0&k=20&c=GkfxdIB1silPUlSzQ16txof-K5-0yQhB6SMrBt_JSKI="
                alt="korean"
                className="anime"
              />
              <div>
                <p className="details bold">Gojou Satoru</p>
                <p className="details">By@Ethar_24</p>
                <p className="details">I help with eriting</p>
                <div className="display-flex">
                  <div>
                    <FaRegComment className="details comments" />
                  </div>
                  <p className="details">90.1k</p>
                </div>
              </div>
            </div>
            <div className="amine-container">
              <img
                src="https://cdn.pixabay.com/photo/2012/04/13/11/06/shield-31869_1280.png"
                alt="korean"
                className="anime"
              />
              <div>
                <p className="details bold">Protect</p>
                <p className="details">By@Ethar_24</p>
                <p className="details">I help with eriting</p>
                <div className="display-flex">
                  <div>
                    <FaRegComment className="details comments" />
                  </div>
                  <p className="details">90.1k</p>
                </div>
              </div>
            </div>
          </div>
          <div className="display-flex flex-wrap">
            <div className="section helpers">
              <p className="content ">Helpers</p>
            </div>
            <div className="section">
              <p className="content">Anime Game Characters</p>
            </div>
            <div className="section">
              <p className="content">Games</p>
            </div>
            <div className="section">
              <p className="content">Anime</p>
            </div>
            <div className="section">
              <p className="content">Game Characters</p>
            </div>
            <div className="section">
              <p className="content">Comedy</p>
            </div>

            <div className="section">
              <p className="content">VTuber</p>
            </div>
            <div className="section">
              <p className="content">Books</p>
            </div>
            <div className="section">
              <p className="content">Image Generating</p>
            </div>
            <div className="section">
              <p className="content">Discussion</p>
            </div>
          </div>
          <div className="display-flex flex-wrap">
            <div className="amine-container margin-top">
              <img
                src="https://media.istockphoto.com/id/1323776321/vector/teamwork-business-people-team-of-office-worker-characters-standing-together-for-work.jpg?s=612x612&w=0&k=20&c=BMKAhDBbq5QdNFxTjnUcbBGBsWmJXS1BVQuJ7E6C6WU="
                alt="korean"
                className="anime"
              />
              <div>
                <p className="details bold">Creative Helper</p>
                <p className="details">By@Ethar_24</p>
                <p className="details">I help with writing</p>
                <div className="display-flex">
                  <div>
                    <FaRegComment className="details comments" />
                  </div>
                  <p className="details">90.1k</p>
                </div>
              </div>
            </div>
            <div className="amine-container margin-top">
              <img
                src="https://media.istockphoto.com/id/917911572/photo/standing-woman-on-the-hill-against-mountain-valley-at-bright-sunny-day-landscape-with-girl.jpg?s=612x612&w=0&k=20&c=nQaktAQwleuMkdIIMx6dZo_aj2Yvj5LP07_XsAqBOeE="
                alt="korean"
                className="anime"
              />
              <div>
                <p className="details bold">Are-you-feeling-ok</p>
                <p className="details">By @summeriscoming</p>
                <p className="details">If you're frrling bad</p>
                <div className="display-flex">
                  <div>
                    <FaRegComment className="details comments" />
                  </div>
                  <p className="details">90.1k</p>
                </div>
              </div>
            </div>

            <div className="amine-container margin-top">
              <img
                src="https://cdn.pixabay.com/photo/2022/08/31/19/10/ukraine-7424066_640.png"
                alt="korean"
                className="anime"
              />
              <div>
                <p className="details bold">Ella - Dating coach</p>
                <p className="details">By @ghpkishore</p>
                <p className="details">Hi Iam a dating coach</p>
                <div className="display-flex">
                  <div>
                    <FaRegComment className="details comments" />
                  </div>
                  <p className="details">12.9m</p>
                </div>
              </div>
            </div>
            <div className="amine-container margin-top">
              <img
                src="https://cdn.pixabay.com/photo/2016/12/10/08/41/alphabet-1896950_640.png"
                alt="korean"
                className="anime"
              />
              <div>
                <p className="details bold">Story teller</p>
                <p className="details">By@Ethar_24</p>
                <p className="details">I help with eriting</p>
                <div className="display-flex">
                  <div>
                    <FaRegComment className="details comments" />
                  </div>
                  <p className="details">100.1k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
