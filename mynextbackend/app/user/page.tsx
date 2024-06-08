import axios from "axios";

async function getUserDetails(){
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}

export default async function Home(){
  const userData = await getUserDetails();
  return(
    <div>
      <div>
      {userData.name}
      
    </div>
    <div>
      {userData.email}
    </div>
    </div>
  );
}

