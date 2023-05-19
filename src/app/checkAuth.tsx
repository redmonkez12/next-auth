"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from './store';
import { usePathname, useRouter } from 'next/navigation';
import { setAuthState } from "./userSlice";

const publicPaths = ["login", "register"];

type Props = {
    children: React.ReactNode;
};

export function CheckAuth({ children }: Props) {
    const router = useRouter();
    const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);
    const pathname = usePathname();
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (isLoggedIn && publicPaths.find((path) => pathname.includes(path))) {
        void router.push('/dashboard');
      } else if (!isLoggedIn && ! publicPaths.find((path) => pathname.includes(path))) {
        void router.push('/login');
      }

    }, [pathname, isLoggedIn]);

    useEffect(() => {
        setTimeout(() => {
            dispatch(setAuthState(false));
        }, 5000);
    }, []);

    if (isLoggedIn == undefined) {
        return <div>Loading</div>;
    }

    return (
        <div>{children}</div>
    );
}