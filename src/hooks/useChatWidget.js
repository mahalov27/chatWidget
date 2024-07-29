import { useState } from "react";
import axios from "axios";
import content from "../common.json";

const useChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [showInputField, setShowInputField] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([...messages, { text: content.greetings, fromBot: true }]);
        setIsTyping(false);
      }, 2000);
    }
  };

  const handleOptionClick = (option) => {
    const messageContainer = document.querySelector(".chat-messages");

    if (option === content.own_question) {
      setShowInputField(true);
    } else {
      setIsTyping(true);
      setMessages([...messages, { text: option, fromBot: false }]);

      setTimeout(() => {
        messageContainer.scrollTo({
          top: 999,
          left: 0,
          behavior: "smooth",
        });
      }, 100);

      setTimeout(() => {
        let response = "";
        switch (option) {
          case content.what_day:
            response = `${content.today} ${new Date().toLocaleDateString(
              "uk-UA",
              {
                weekday: "long",
              }
            )}`;
            break;
          case content.what_time:
            response = `${content.now} ${new Date().toLocaleTimeString(
              "uk-UA"
            )}`;
            break;
          case content.how_many_days:
            const today = new Date();
            const nextYear = new Date(today.getFullYear() + 1, 0, 1);
            const daysUntilNewYear = Math.ceil(
              (nextYear - today) / (1000 * 60 * 60 * 24)
            );
            response = `${content.till_new_year} ${daysUntilNewYear} ${content.days}`;
            break;
          default:
            response = content.dont_understand;
        }
        setMessages([
          ...messages,
          { text: option, fromBot: false },
          { text: response, fromBot: true },
        ]);
        setIsTyping(false);

        messageContainer.scrollTo({
          top: 999,
          left: 0,
          behavior: "smooth",
        });
      }, 2000);
    }
  };

  const handleUserQuestionSubmit = () => {
    setIsTyping(true);
    setMessages([...messages, { text: userQuestion, fromBot: false }]);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        question: userQuestion,
      })
      .then((response) => {
        setTimeout(() => {
          setMessages([
            ...messages,
            { text: userQuestion, fromBot: false },
            { text: content.thanks, fromBot: true },
          ]);
          setIsTyping(false);
        }, 2000);
      })
      .catch((error) => {
        console.error(content.post_error, error);
      });
    setUserQuestion("");
    setShowInputField(false);
  };

  return {
    handleToggle,
    handleOptionClick,
    handleUserQuestionSubmit,
    isTyping,
    showInputField,
    isOpen,
    messages,
    userQuestion,
    setUserQuestion,
  };
};
export default useChatWidget;
