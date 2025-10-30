import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaLink, FaShare } from 'react-icons/fa';

const ShareButtons = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = window.location.href;
  const shareTitle = 'Check out this amazing portfolio!';

  const shareLinks = [
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      url: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`,
      color: 'bg-green-500 hover:bg-green-600'
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed left-8 bottom-8 z-50">
      <div className="relative">
        {/* Share Buttons */}
        {showButtons && (
          <div className="absolute bottom-16 left-0 space-y-3 mb-2">
            {shareLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-12 h-12 animate-fadeIn`}
                style={{ animationDelay: `${index * 0.1}s` }}
                title={`Share on ${link.name}`}
              >
                {link.icon}
              </a>
            ))}
            <button
              onClick={copyToClipboard}
              className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-12 h-12"
              title="Copy link"
            >
              <FaLink />
            </button>
          </div>
        )}

        {/* Copy Success Message */}
        {copied && (
          <div className="absolute bottom-16 left-16 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
            Link copied!
          </div>
        )}

        {/* Main Share Button */}
        <button
          onClick={() => setShowButtons(!showButtons)}
          className={`bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${showButtons ? 'rotate-45' : ''}`}
          aria-label="Share"
        >
          <FaShare size={20} />
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
