import React, { useState } from 'react';
import './Tabs.css';
import Tabs from './Tabs';

const Dashboard = ({variant}) => {


  // const [tabs,setTabs]= useState(["tab1","tab2","tab3"])

  const [tabs, setTabs] = useState([
    { id: 1, name: "tab1", color: "rgb(136, 136, 248);" },
    { id: 2, name: "tab2", color: "rgb(136, 136, 248);" },
    { id: 3, name: "tab3", color: "rgb(136, 136, 248);" },
  ]);


  // const [activeTab,setaAtiveTab]= useState(tabs[0])

  const [activeTab, setActiveTab] = useState(tabs[0]?.id || null);
  const renameTab = (id, newName) => {
    const updatedTabs = tabs.map((tab) =>
      tab.id === id ? { ...tab, name: newName } : tab
    );
    setTabs(updatedTabs);
  };

  const handleColorChange = (id, newColor) => {
    const updatedTabs = tabs.map((tab) =>
      tab.id === id ? { ...tab, color: newColor } : tab
    );
    setTabs(updatedTabs);
  };

  const deleteTab = (id) => {
    const updatedTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(updatedTabs);

    if (id === activeTab && updatedTabs.length > 0) {
      setActiveTab(updatedTabs[0].id);
    }
  };

  return (
    <div className={`tabs-container ${variant}`}>
      <div className="tabs">
        {tabs.map((tab) => (
          <Tabs
            key={tab.id}
            tab={tab}
            isActive={tab.id === activeTab}
            onActivate={setActiveTab}
            onRename={renameTab}
            onDelete={deleteTab}
            onColorChange={handleColorChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
