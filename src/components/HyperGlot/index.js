import React from "react";
import SideBar from "../SideBar";
import { IoSend } from "react-icons/io5";
import "./hyper.css";
import MuiSidebar from "../MuiSidebar";
export default function HyperGot() {
  return (
    <div className="rowz">
      <MuiSidebar />
      <div className="align-right main-container">
        <div className="hyper-glot hyper-name">
          <img
            src="https://media.istockphoto.com/id/1221130606/photo/dropping-fruit-into-the-water-splash.jpg?s=612x612&w=0&k=20&c=G_sRIZsgrtheN02hNyw5dvDQwz_wh_mV2kpXs7Kb-WU="
            alt="hyper"
            className="hyper-icon"
          />
          <div>
            <p className="name-of">HyperGlot</p>
            <p className="by">by@XpertHead</p>
          </div>
        </div>
        <div className="chat-container">
          <div className="hyper-glot text-center hide">
            <img
              src="https://media.istockphoto.com/id/1221130606/photo/dropping-fruit-into-the-water-splash.jpg?s=612x612&w=0&k=20&c=G_sRIZsgrtheN02hNyw5dvDQwz_wh_mV2kpXs7Kb-WU="
              alt="hyper"
              className="hyper-icon"
            />
            <div>
              <p className="name-of">HyperGlot</p>
              <p className="by">by@XpertHead</p>
            </div>
          </div>
          <div className="para">
            <p className="discription">
              Willkommen, bienvenue welcome - I'm HyperGlot , and I'm fluent in
              many languages, and will help you in practice ones(s) you're
              learning. I can also translate anything you don't undestand.
            </p>
          </div>
          <div className="ai-chat">
            <img
              src="https://media.istockphoto.com/id/1221130606/photo/dropping-fruit-into-the-water-splash.jpg?s=612x612&w=0&k=20&c=G_sRIZsgrtheN02hNyw5dvDQwz_wh_mV2kpXs7Kb-WU="
              alt="ai"
              className="ai-chat-img"
            />
            <p className="ai-name">
              HyperGlot <span className="span">c.ai</span>
            </p>
          </div>
          <div className="chat-msgs">
            <p className="msg">
              Willkommen, bienvenue welcome - I'm HyperGlot , and I'm fluent in
              many languages, and will help you in practice ones(s) you're
              learning. I can also translate anything you don't undestand.
            </p>
          </div>
          <div className="ai-chat flex-end">
            <div className="ai-chat flex-end flex-column">
              <div className="ai-chat">
                <p className="ai-name ml">
                  HyperGlot <span className="span">c.ai</span>
                </p>
                <img
                  src="https://cdn.pixabay.com/photo/2013/07/12/16/01/alphabet-150764_640.png"
                  alt="ai"
                  className="ai-chat-img mr"
                />
              </div>
              <p className="msg flex-end ">Hello</p>
            </div>
          </div>
          <div className="ai-chat">
            <img
              src="https://media.istockphoto.com/id/1221130606/photo/dropping-fruit-into-the-water-splash.jpg?s=612x612&w=0&k=20&c=G_sRIZsgrtheN02hNyw5dvDQwz_wh_mV2kpXs7Kb-WU="
              alt="ai"
              className="ai-chat-img"
            />
            <p className="ai-name">
              HyperGlot <span className="span">c.ai</span>
            </p>
          </div>
          <div className="chat-msgs">
            <p className="msg">
              Hallo! Hast du etwas zu ubersetzen der zu fragen?
            </p>
          </div>
          <div className="ai-chat">
            <img
              src="https://media.istockphoto.com/id/1221130606/photo/dropping-fruit-into-the-water-splash.jpg?s=612x612&w=0&k=20&c=G_sRIZsgrtheN02hNyw5dvDQwz_wh_mV2kpXs7Kb-WU="
              alt="ai"
              className="ai-chat-img"
            />
            <p className="ai-name">
              HyperGlot <span className="span">c.ai</span>
            </p>
          </div>
          <div className="chat-msgs">
            <p className="msg">Welche Sprache lernst du denn gerade?</p>
          </div>
          <div className="search-container">
            <input
              type="search"
              className="search-bar"
              placeholder="Message HyperGlot"
            />
            <IoSend className="send-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
