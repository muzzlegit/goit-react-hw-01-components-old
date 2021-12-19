
import UserProfile from './components/UserProfile/UserProfile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

export default function App() {
  return (
    <div>
      <UserProfile
        src={user.avatar}
        alt={user.username}
        name={user.username}
        tag={user.tag}      
        location={user.location}
        stats={user.stats}       
      />
      <Statistics
        title="Upload stats"
        data={data}     
      />
      <Statistics
        data={data}     
      />      
      <FriendList
        friends={friends}     
      />
      <TransactionHistory
        items={transactions}
      />
    </div>

  )
}


