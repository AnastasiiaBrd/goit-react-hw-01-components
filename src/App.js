import "./App.css";
import Profile from "./components/Profile/Profile.jsx";
import user from "./base/user.json";

import Statistics from "./components/Statistics/Statistics.jsx";
import data from "./base/data.json";

import FriendList from "./components/FriendList/FriendList";
import friends from "./base/friends.json";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import transactions from "./base/transactions.json";

export default function App() {
  return (
    <div className="App">
      <div className="Profile">
        <Profile data={user} />
      </div>
      <div className="Statistics">
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div className="FriendList">
        <FriendList friends={friends} />
      </div>
      <div className="TransactionHistory">
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}
