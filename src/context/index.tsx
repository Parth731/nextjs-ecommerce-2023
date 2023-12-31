"use client";

import {
  LayoutProps,
  adminAddProductType,
  loadderType,
  responseLoginType,
} from "@/types/type";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }: LayoutProps) {
  const [showNavModal, setShowNavModal] = useState<boolean>(false);
  const [commonLoader, setCommonLoader] = useState<boolean>(false);
  const [pageLevelLoader, setPageLevelLoader] = useState<boolean>(false);
  const [componentLevelLoader, setComponentLevelLoader] = useState<loadderType>(
    {
      loading: false,
      id: "",
    }
  );
  const [isAuthUser, setIsAuthUser] = useState<boolean>(false);
  const [user, setUser] = useState<responseLoginType | {}>({});
  const [currentUpdatedProduct, setCurrentUpdatedProduct] = useState<
    adminAddProductType | {}
  >({});

  useEffect(() => {
    if (Cookies.get("token") !== undefined) {
      setIsAuthUser(true);
      const userLocal: any = localStorage.getItem("user");
      const userData: responseLoginType[] = JSON.parse(userLocal) || {};
      console.log(userData);
      // const cartItems: any = localStorage.getItem("cartItems");
      // const getCartItems = JSON.parse(cartItems) || [];
      setUser(userData);
      // setCartItems(getCartItems);
    } else {
      setIsAuthUser(false);
      setUser({}); //unauthenticated user
    }
  }, [Cookies]);

  const value: any = {
    showNavModal,
    setShowNavModal,
    commonLoader,
    setCommonLoader,
    isAuthUser,
    setIsAuthUser,
    user,
    setUser,
    pageLevelLoader,
    setPageLevelLoader,
    componentLevelLoader,
    setComponentLevelLoader,
    currentUpdatedProduct,
    setCurrentUpdatedProduct,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
