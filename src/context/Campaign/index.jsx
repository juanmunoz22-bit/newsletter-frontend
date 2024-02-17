import React, { createContext, useState, useEffect } from "react";

export const CampaignContext = createContext({});

export const CampaignProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/newsletter/campaigns')
      .then(response => response.json())
      .then(data => setCampaigns(data.data))
  }, [])

  return (
    <CampaignContext.Provider value={{
      campaigns,
      setCampaigns
    }}>
      {children}
    </CampaignContext.Provider>
  )
};