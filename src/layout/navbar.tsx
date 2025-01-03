import { useEffect, useRef, useState } from "react";
import { ParkingSystemService } from "../api/parking-system";
import { decodeJwt } from "../helper/jwt";
import { User } from "../interface/user";

export const Navbar = () => {
  const [isOnline, setOnline] = useState(false);
  const isOnlineRef = useRef(isOnline);
  const user: any = useRef({})
  const getUser: User = decodeJwt()
  user.current = getUser
  
  useEffect(() => {
    isOnlineRef.current = isOnline;
  }, [isOnline]);

  useEffect(() => {
    const interval = setInterval(() => {
      const serverHealth = () => {
          ParkingSystemService.getServerHealth()
          .then((res) => {
            if (res.data.status == "ok") {
              setOnline(true);
            } else {
              setOnline(false);
            }
          })
          .catch(() => setOnline(false));
      };
      serverHealth();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full shadow-lg duration-1000 justify-between bg-base-100 items-center">
      <div className="navbar">
        <a className="btn btn-ghost text-xl">Parking System</a>
        <div className={`w-3 h-3 ${isOnline ? "bg-green-500": "bg-red-500"} rounded-full`}></div>
      </div>
      <div className="avatar mx-10">
        <div className="mx-5 ring-primary ring-offset-base-100 w-7 rounded-full ring ring-offset-2">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        <p>{user.current?.name}</p>
      </div>
    </div>
  );
};
