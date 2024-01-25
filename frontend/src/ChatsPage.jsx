import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div style={{ height: '100vh' }}>
    <PrettyChatWindow
      projectId="583595a8-2954-4eba-9701-4a1a320a4074"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100vh'}}
      />
    </div>
  );
}

export default ChatsPage;