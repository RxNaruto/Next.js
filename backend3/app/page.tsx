import axios from "axios";

async function getUserDetail(){
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
  return response.data;
}

export function getUserDetail2(){
  const response = await axios.get("#");
  
}

export default async function Home(){
  const userdata=await getUserDetail();

  return(
    <div>
     {userdata.email}
      <br />
     {userdata.name}
    </div>
  )
}