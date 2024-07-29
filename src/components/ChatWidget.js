import ChatBubble from "./ChatBubble";
import Message from "./Message";
import InputField from "./InputField";
import Typing from "./Typing";
import useChatWidget from "../hooks/useChatWidget";
import "./ChatWidget.css";
import content from "../common.json";

const ChatWidget = () => {
  const {
    isTyping,
    showInputField,
    isOpen,
    messages,
    userQuestion,
    handleToggle,
    handleOptionClick,
    handleUserQuestionSubmit,
    setUserQuestion
  } = useChatWidget();

  return (
    <div className="chat-widget">
      <button className="chat-toggle" onClick={handleToggle}>
        {isOpen ? content.button_closed : content.button_open}
      </button>
      <div className={`chat-window ${isOpen ? "open" : ""}`}>
        <div className="chat-messages">
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
          {isTyping && <Typing />}
        </div>
        {showInputField ? (
          <InputField
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            onSubmit={handleUserQuestionSubmit}
          />
        ) : (
          <div className="chat-options">
            <ChatBubble text={content.what_day} onClick={handleOptionClick} />
            <ChatBubble text={content.what_time} onClick={handleOptionClick} />
            <ChatBubble
              text={content.how_many_days}
              onClick={handleOptionClick}
            />
            <ChatBubble
              text={content.own_question}
              onClick={handleOptionClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatWidget;
