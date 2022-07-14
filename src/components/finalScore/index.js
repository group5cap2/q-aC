import React from "react";
import "./style.css";
const Final = ({ score, name }) => {
  return (
    <div>
      <div className="divFinal">
        {" "}
        {score > 7 ? (
          <p>🤟نااااااايس كل الاجابات صح</p>
        ) : score < 4 ? (
          <p> وي وي طلعتي ما تعرفيني جبتي {score} من 8</p>
        ) : (
          <p>
             نتيجتك يا حبيبتي يا {name} هي {score} من 8 بقي القليل 
          </p>
        )}
      </div>{" "}
      {score > 6 ? <div className="endGif"></div> : ""}
      <div>
        <form>
          <button className="btnStart" id="btnEnd">
            عودة
          </button>
        </form>
      </div>
    </div>
  );
};

export default Final;
