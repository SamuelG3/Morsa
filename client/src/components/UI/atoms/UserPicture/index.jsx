import React, { useEffect, useState } from "react";
import { getUser } from "../../../../services/authServices";
import { useDispatch } from "react-redux";
import { SET_USER } from "../../../../redux/features/auth/authSlice";

export default function UserPicture() {
  const [profile, setProfile] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    async function getUserData() {
      const data = await getUser();
      console.log(data);

      setProfile(data);
      await dispatch(SET_USER(data));
    }
    getUserData();
  }, [dispatch]);

  return (
    <img
      id="userPicture"
      className="rounded-circle"
      src={profile?.photo}
      alt=" "
    />
  );
}
