import { signIn, signOut, useUser } from 'services/firebase';

import './User.scss';

function User() {
  const user = useUser();

  return (
    <section className="user">
      {user && <span className="display-name">{user.displayName}</span>}

      {user ? (
        <button onClick={signOut}>Sign Out</button>
      ) : (
        <button onClick={signIn}>Sign In</button>
      )}
    </section>
  );
}

export default User;
