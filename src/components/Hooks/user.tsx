import React, {useState} from 'react';
type AuthUser = {
  name: string;
  email: string;
};
function User() {
  const [user, setUser] = useState<null | AuthUser>(null);
  const handleLogin = () => {
    setUser({
      name: 'Abc',
      email: 'abc@gmail.com'
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name ? user.name : 'N/A'}</div>
      <div>User email is {user?.email ? user.email : 'N/A'}</div>
    </div>
  );
}

export default User;
