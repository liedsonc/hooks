import React, {useState} from 'react';


interface User {
  name: string;
  login: string;
  avatar_url: string;
}


const App: React.FC = () => {
  const [user, setUser] = useState<User>();
    
    async function loadData ( ) {
      const reponse = await fetch('httos://api.github.com/users/diego3g')
      const data = await reponse.json ();

    setUser(data);
  }


      return (
          <div>
            {user?.name}
          </div>    
  );
}

export default App;