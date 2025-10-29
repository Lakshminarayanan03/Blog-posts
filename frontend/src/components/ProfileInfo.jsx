import React from 'react'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { fetchProfile } from "../api/auth";

export const ProfileInfo = () => {

  const { token, user } = useContext(AuthContext);
  const [profile, setProfile] = useState(user);

  useEffect(() => {
    if (token) {
      fetchProfile(token).then((res) => setProfile(res.data));
    }
  }, [token]);

  if (!profile) return <p>Loading...</p>;

  return (
   <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
   <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-gray-800">
    <h2 className="text-3xl font-semibold text-center mb-6 text-orange-600">
      Profile Information
    </h2>

    <div className="space-y-4 text-lg">
      <div className="flex justify-between border-b pb-2">
        <span className="font-semibold text-gray-600">Name:</span>
        <span className="text-gray-900">{profile.name}</span>
      </div>

      <div className="flex justify-between border-b pb-2">
        <span className="font-semibold text-gray-600">Email:</span>
        <span className="text-gray-900">{profile.email}</span>
      </div>
    </div>

    <button className="mt-8 w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-lg transition">
      Edit Profile
    </button>
  </div>
</div>
  )
}
