<<<<<<< HEAD
import React from "react";

function makeEmojiList(minutes) {
  const interval = minutes < 30 ? 5 : 10;
  const emoji = minutes < 30 ? "☕️" : "🍱";

  let emojis = "";
  for (let i = 0; i < minutes; i += interval) {
    emojis += emoji;
  }

  return emojis;
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const emojis = makeEmojiList(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emojis} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
=======
import React from "React";

function Article({title, date="January 1, 1970"}){


    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
        </article>
    )
>>>>>>> 0f034fd5bcbddded428b24dd2062cdd60a70c1ef
}

export default Article;