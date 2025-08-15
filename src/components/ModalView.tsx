import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, Eye, ZoomIn, ZoomOut } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ModalViewProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: {
    type: 'pdf' | 'image' | 'link';
    url: string;
    description?: string;
    downloadUrl?: string;
  };
  details?: {
    organization?: string;
    year?: string;
    authors?: string;
    description?: string;
  };
}

const ModalView = ({ isOpen, onClose, title, content, details }: ModalViewProps) => {
  const [zoom, setZoom] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const resetZoom = () => setZoom(1);

  const handleDownload = () => {
    const downloadUrl = content.downloadUrl || content.url;
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExternalOpen = () => {
    window.open(content.url, '_blank', 'noopener,noreferrer');
  };

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const renderContent = () => {
    switch (content.type) {
      case 'pdf':
        return (
          <div className="w-full h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Document Preview</h3>
              <div className="flex gap-2">
                <motion.button
                  onClick={handleDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  <Download size={16} className="mr-1" />
                  Download
                </motion.button>
                <motion.button
                  onClick={handleExternalOpen}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Open in New Tab
                </motion.button>
              </div>
            </div>
            <div className="w-full h-96 lg:h-[500px] border rounded-lg overflow-hidden">
              {!pdfError ? (
                <iframe
                  src={content.url}
                  className="w-full h-full"
                  title={title}
                  onError={() => setPdfError(true)}
                />
              ) : (
                <div className="flex items-center justify-center h-full flex-col space-y-4">
                  <p className="text-gray-600">Unable to display PDF in browser</p>
                  <button
                    onClick={handleDownload}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Download PDF
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      
      case 'image':
        return (
          <div className="w-full h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Certificate Preview</h3>
              <div className="flex gap-2">
                <motion.button
                  onClick={handleZoomOut}
                  disabled={zoom <= 0.5}
                  whileHover={{ scale: zoom > 0.5 ? 1.05 : 1 }}
                  whileTap={{ scale: zoom > 0.5 ? 0.95 : 1 }}
                  className="inline-flex items-center px-3 py-1.5 bg-gray-600 text-white rounded-md text-sm font-medium hover:bg-gray-700 transition-colors disabled:opacity-50"
                >
                  <ZoomOut size={16} className="mr-1" />
                  Zoom Out
                </motion.button>
                <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">
                  {Math.round(zoom * 100)}%
                </span>
                <motion.button
                  onClick={handleZoomIn}
                  disabled={zoom >= 3}
                  whileHover={{ scale: zoom < 3 ? 1.05 : 1 }}
                  whileTap={{ scale: zoom < 3 ? 0.95 : 1 }}
                  className="inline-flex items-center px-3 py-1.5 bg-gray-600 text-white rounded-md text-sm font-medium hover:bg-gray-700 transition-colors disabled:opacity-50"
                >
                  <ZoomIn size={16} className="mr-1" />
                  Zoom In
                </motion.button>
                <motion.button
                  onClick={resetZoom}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-3 py-1.5 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
                >
                  Reset
                </motion.button>
                <motion.button
                  onClick={handleDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  <Download size={16} className="mr-1" />
                  Download
                </motion.button>
                <motion.button
                  onClick={handleExternalOpen}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Open in New Tab
                </motion.button>
              </div>
            </div>
            <div className="w-full h-96 lg:h-[500px] border rounded-lg overflow-auto">
              <div className="flex items-center justify-center min-h-full p-4">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                )}
                <img
                  src={content.url}
                  alt={title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg transition-transform duration-200"
                  style={{ transform: `scale(${zoom})` }}
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/api/placeholder/400/300';
                    setImageLoaded(true);
                  }}
                />
              </div>
            </div>
          </div>
        );

      case 'link':
        return (
          <div className="flex items-center justify-center h-96 flex-col space-y-4">
            <div className="text-center">
              <Eye size={48} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">External Link</h3>
              <p className="text-gray-600 mb-4">This content opens in a new window</p>
              <motion.button
                onClick={handleExternalOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <ExternalLink size={20} className="mr-2" />
                Open Link
              </motion.button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold truncate">{title}</h2>
                {details && (
                  <div className="mt-1 text-blue-100 text-sm">
                    {details.organization && details.year && (
                      <span>{details.organization} • {details.year}</span>
                    )}
                    {details.authors && (
                      <div className="text-xs mt-1">{details.authors}</div>
                    )}
                  </div>
                )}
              </div>

              <button
              onClick={onClose} 
              className="ml-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              title="Close modal"
              aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[calc(90vh-140px)] overflow-auto">
              {renderContent()}
              
              {/* Description */}
              {(content.description || details?.description) && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {content.description || details?.description}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalView;
