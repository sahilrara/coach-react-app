import { useState, useContext, createContext } from "react";
const ProfileJoyrideProviderContext = createContext();
export function useProfileJoyrideProvider() {
  return useContext(ProfileJoyrideProviderContext);
}
export default function ProfileJoyrideProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const value = {
    showSidebar,
    setShowSidebar,
  };
  return (
    <ProfileJoyrideProviderContext.Provider value={value}>
      {children}
    </ProfileJoyrideProviderContext.Provider>
  );
}
