import React, {useState} from 'react';
type AuthUser = {
  name: string;
  email: string;
};
function TypeAssertionUseState() {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: 'Abc',
      email: 'abc@gmail.com'
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>

      <div>User name is {user.name}</div>
      <div>User email is {user.email ? user.email : 'N/A'}</div>
    </div>
  );
}

export default TypeAssertionUseState;
