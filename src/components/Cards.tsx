import styles from  '../styles/cards.module.css';

const grow = require('../assets/illustration-grow-together.svg').default
const conversations = require('../assets/illustration-flowing-conversation.svg').default
const users = require('../assets/illustration-your-users.svg').default

function Cards() {
  const {container,card,cardContent,imageContainer} = styles
  return (
    <div className={container}>
      <div className={card}>
        <div className={cardContent}>
        <h1>Grow Together</h1>
        <p>Generate meaningful discussions with your audience and build a strong, loyal community. 
  Think of the insightful conversations you miss out on with a feedback form. 
</p>
        </div>
        <div className={imageContainer}>
          <img src={grow} alt="cardImage" />
        </div>
      </div>

      <div className={card}>
        <div className={cardContent}>
        <h1> Flowing Conversations</h1>
        <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads 
  have just-in-time loading for a more natural flow.
</p>
        </div>
        <div className={imageContainer}>
          <img src={conversations} alt="cardImage" />
        </div>
      </div>


      <div className={card}>
        <div className={cardContent}>
        <h1>Your Users</h1>
        <p>It takes no time at all to integrate Huddle with your app's authentication solution. 
  This means, once signed in to your app, your users can start chatting immediately.
</p>
        </div>
        <div className={imageContainer}>
          <img src={users} alt="cardImage" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
