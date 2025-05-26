
import { useState } from 'react';
import { Monitor, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ViewModeToggle = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleViewMode = () => {
    const newMode = !isMobileView;
    setIsMobileView(newMode);
    
    // Apply styles to simulate mobile/desktop view
    const body = document.body;
    if (newMode) {
      body.style.maxWidth = '375px';
      body.style.margin = '0 auto';
      body.style.border = '1px solid #ccc';
      body.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
    } else {
      body.style.maxWidth = '';
      body.style.margin = '';
      body.style.border = '';
      body.style.boxShadow = '';
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleViewMode}
      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      title={isMobileView ? 'Switch to Desktop View' : 'Switch to Mobile View'}
    >
      {isMobileView ? (
        <Monitor size={20} className="text-gray-800" />
      ) : (
        <Smartphone size={20} className="text-gray-800" />
      )}
    </Button>
  );
};

export default ViewModeToggle;
