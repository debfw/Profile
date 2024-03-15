import React, { createContext, useContext, useState, ReactNode } from "react";

interface CardContextType {
  isExperienceVisible: boolean;
  toggleExperienceVisibility: () => void;
  isPortfolioVisible: boolean;
  togglePortfolioVisibility: () => void;
  isSkillSetVisible: boolean;
  toggleSkillSetVisibility: () => void;
  isSnackbarVisible: boolean;
  toggleSnackbarVisibility: () => void;
}

const CardContext = createContext<CardContextType>({
  isExperienceVisible: false,
  toggleExperienceVisibility: () => {},
  isPortfolioVisible: false,
  togglePortfolioVisibility: () => {},
  isSkillSetVisible: false,
  toggleSkillSetVisibility: () => {},
  isSnackbarVisible: false,
  toggleSnackbarVisibility: () => {},
});

export const useCardContext = () => useContext(CardContext);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [isSkillSetVisible, setIsSkillSetVisible] = useState(false);
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);

  const toggleExperienceVisibility = () =>
    setIsExperienceVisible(!isExperienceVisible);
  const togglePortfolioVisibility = () =>
    setIsPortfolioVisible(!isPortfolioVisible);
  const toggleSkillSetVisibility = () =>
    setIsSkillSetVisible(!isSkillSetVisible);
  const toggleSnackbarVisibility = () =>
    setIsSnackbarVisible(!isSnackbarVisible);

  return (
    <CardContext.Provider
      value={{
        isExperienceVisible,
        toggleExperienceVisibility,
        isPortfolioVisible,
        togglePortfolioVisibility,
        isSkillSetVisible,
        toggleSkillSetVisibility,
        isSnackbarVisible,
        toggleSnackbarVisibility,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
