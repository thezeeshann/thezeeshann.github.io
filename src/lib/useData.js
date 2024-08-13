import { useEffect, useState } from "react";

export function useUserData() {
  const [userData, setuserData] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/thezeeshann"
        );
        const data = await response.json(); 
        setuserData(data);
      } catch (error) {
        console.log("USER API ERROR");
      }
    };
    fetchUserData();
  }, []);

  return {
    userData,
  };
}
