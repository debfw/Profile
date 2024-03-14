import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CardContextType {
  isExperienceVisible: boolean;
  toggleExperienceVisibility: () => void;
  isPortfolioVisible: boolean;
  togglePortfolioVisibility: () => void;
  isSkillSetVisible: boolean;
  toggleSkillSetVisibility: () => void;
}

const CardContext = createContext<CardContextType>({
  isExperienceVisible: false,
  toggleExperienceVisibility: () => {},
  isPortfolioVisible: false,
  togglePortfolioVisibility: () => {},
  isSkillSetVisible: false,
  toggleSkillSetVisibility: () => {},
});

export const useCardContext = () => useContext(CardContext);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [isSkillSetVisible, setIsSkillSetVisible] = useState(false);

  const toggleExperienceVisibility = () => setIsExperienceVisible(!isExperienceVisible);
  const togglePortfolioVisibility = () => setIsPortfolioVisible(!isPortfolioVisible);
  const toggleSkillSetVisibility = () => setIsSkillSetVisible(!isSkillSetVisible);

  return (
    <CardContext.Provider value={{
      isExperienceVisible,
      toggleExperienceVisibility,
      isPortfolioVisible,
      togglePortfolioVisibility,
      isSkillSetVisible,
      toggleSkillSetVisibility
    }}>
      {children}
    </CardContext.Provider>
  );
};
