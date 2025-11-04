'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Asset {
  id: string;
  filename: string;
  path: string;
  type: string;
  size?: string;
}

const assets: Asset[] = [
  { id: '1', filename: 'IMG_20230420_083143.jpeg', path: '/images/IMG_20230420_083143.jpeg', type: 'JPEG', size: '2.4 MB' },
  { id: '2', filename: 'IMG_20230420_090926.jpeg', path: '/images/IMG_20230420_090926.jpeg', type: 'JPEG', size: '2.1 MB' },
  { id: '3', filename: 'IMG_20230505_084716.jpeg', path: '/images/IMG_20230505_084716.jpeg', type: 'JPEG', size: '2.3 MB' },
  { id: '4', filename: 'IMG_20230505_084732.jpeg', path: '/images/IMG_20230505_084732.jpeg', type: 'JPEG', size: '2.2 MB' },
  { id: '5', filename: 'IMG_20230721_083509.jpeg', path: '/images/IMG_20230721_083509.jpeg', type: 'JPEG', size: '2.5 MB' },
  { id: '6', filename: 'IMG_20240209_074221.jpg', path: '/images/IMG_20240209_074221.jpg', type: 'JPG', size: '1.8 MB' },
  { id: '7', filename: 'IMG_20240209_075032.jpg', path: '/images/IMG_20240209_075032.jpg', type: 'JPG', size: '1.9 MB' },
  { id: '8', filename: 'IMG_9611.jpeg', path: '/images/IMG_9611.jpeg', type: 'JPEG', size: '2.0 MB' },
  { id: '9', filename: 'little_girl_classroom.jpg', path: '/images/little_girl_classroom.jpg', type: 'JPG', size: '1.7 MB' },
  { id: '10', filename: 'Math class.png', path: '/images/Math class.png', type: 'PNG', size: '3.2 MB' },
  { id: '11', filename: 'Primary Teacher 1.png', path: '/images/Primary Teacher 1.png', type: 'PNG', size: '2.8 MB' },
  { id: '12', filename: 'Primary Teacher 4.png', path: '/images/Primary Teacher 4.png', type: 'PNG', size: '3.1 MB' },
];

export default function Home() {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAssets = assets.filter(asset =>
    asset.filename.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-700">
      {/* Header */}
      <header className="bg-slate-200 dark:bg-slate-800 neu-flat-sm border-b-0">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 neu-blue rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Digital Asset Manager</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Manage and organize your media assets</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <a
                href="/experiment"
                className="px-3 py-1 bg-slate-200 dark:bg-slate-800 neu-flat hover:neu-pressed rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 transition-all"
              >
                View Experiment
              </a>
              <span className="px-3 py-1 bg-slate-200 dark:bg-slate-800 neu-pressed-sm rounded-full text-sm font-medium text-slate-700 dark:text-slate-300">
                {filteredAssets.length} assets
              </span>
            </div>
          </div>

          {/* Search and View Controls */}
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search assets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-slate-200 dark:bg-slate-800 neu-pressed rounded-lg focus:outline-none dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400"
                />
                <svg className="w-5 h-5 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-slate-200 dark:bg-slate-800 neu-pressed text-slate-700 dark:text-slate-300'
                    : 'bg-slate-200 dark:bg-slate-800 neu-flat text-slate-600 dark:text-slate-400 hover:neu-pressed'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list'
                    ? 'bg-slate-200 dark:bg-slate-800 neu-pressed text-slate-700 dark:text-slate-300'
                    : 'bg-slate-200 dark:bg-slate-800 neu-flat text-slate-600 dark:text-slate-400 hover:neu-pressed'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {filteredAssets.length === 0 ? (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-slate-500 dark:text-slate-400 text-lg">No assets found</p>
          </div>
        ) : (
          <div className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
          }>
            {filteredAssets.map((asset) => (
              <div
                key={asset.id}
                onClick={() => setSelectedAsset(asset)}
                className={`group cursor-pointer bg-slate-200 dark:bg-slate-800 neu-flat rounded-xl overflow-hidden transition-all duration-300 hover:neu-flat-lg ${
                  viewMode === 'list' ? 'flex items-center' : ''
                }`}
              >
                <div className={`relative ${viewMode === 'grid' ? 'aspect-square' : 'w-24 h-24'} bg-slate-200 dark:bg-slate-800 neu-pressed overflow-hidden`}>
                  <Image
                    src={asset.path}
                    alt={asset.filename}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes={viewMode === 'grid' ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" : "96px"}
                  />
                </div>
                
                <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <h3 className="font-medium text-slate-900 dark:text-white truncate mb-1">
                    {asset.filename}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 neu-pressed-sm rounded text-xs font-medium text-slate-700 dark:text-slate-300">
                      {asset.type}
                    </span>
                    {asset.size && <span className="text-xs">{asset.size}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Lightbox Modal */}
      {selectedAsset && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedAsset(null)}
        >
          <div
            className="bg-slate-200 dark:bg-slate-800 neu-flat-lg rounded-2xl max-w-5xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-300/50 dark:border-slate-600/50">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                {selectedAsset.filename}
              </h2>
              <button
                onClick={() => setSelectedAsset(null)}
                className="p-2 bg-slate-200 dark:bg-slate-800 neu-flat hover:neu-pressed rounded-lg transition-all text-slate-700 dark:text-slate-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 bg-slate-200 dark:bg-slate-800 neu-pressed flex items-center justify-center p-8">
                <div className="relative w-full h-96 lg:h-[600px]">
                  <Image
                    src={selectedAsset.path}
                    alt={selectedAsset.filename}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>
              </div>
              
              <div className="lg:w-80 p-6 space-y-4 bg-slate-200 dark:bg-slate-800">
                <div>
                  <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b border-slate-300/50 dark:border-slate-600/50">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Type</span>
                      <span className="text-sm font-medium text-slate-900 dark:text-white">{selectedAsset.type}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-300/50 dark:border-slate-600/50">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Size</span>
                      <span className="text-sm font-medium text-slate-900 dark:text-white">{selectedAsset.size}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-300/50 dark:border-slate-600/50">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Filename</span>
                      <span className="text-sm font-medium text-slate-900 dark:text-white truncate max-w-[150px]">
                        {selectedAsset.filename}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">Actions</h3>
                  <div className="space-y-2">
                    <button className="w-full px-4 py-2 bg-blue-500 neu-blue hover:neu-blue-pressed active:neu-blue-pressed rounded-lg transition-all text-white flex items-center justify-center space-x-2 font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span>Download</span>
                    </button>
                    <button className="w-full px-4 py-2 bg-slate-200 dark:bg-slate-800 neu-flat hover:neu-pressed active:neu-pressed rounded-lg transition-all text-slate-900 dark:text-white flex items-center justify-center space-x-2 font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
