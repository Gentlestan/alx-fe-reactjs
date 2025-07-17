{ /*import UserInfo from './UserInfo';
import UserDetails from './UserDetails';

function ProfilePage() {
  return <div>
    <h1>Profile Page</h1>
    <UserDetails />
  </div>;
}

export default ProfilePage; */}

import { useContext } from 'react';
import UserContext from './components/UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
