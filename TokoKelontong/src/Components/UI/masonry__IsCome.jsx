// import React, { useState, useEffect, useRef, useCallback } from 'react';
// // Komponen LazyImage untuk lazy loading gambar
// const LazyImage = ({ src, alt, className, onLoad }) => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isInView, setIsInView] = useState(false);
//   const imgRef = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (imgRef.current) {
//       observer.observe(imgRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const handleLoad = () => {
//     setIsLoaded(true);
//     onLoad && onLoad();
//   };

//   return (
//     <div ref={imgRef} className={className}>
//       {isInView && (
//         <>
//           <img
//             src={src}
//             alt={alt}
//             onLoad={handleLoad}
//             className={`w-full h-auto transition-opacity duration-300 ${
//               isLoaded ? 'opacity-100' : 'opacity-0'
//             }`}
//           />
//           {!isLoaded && (
//             <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
//           )}
//         </>
//       )}
//       {!isInView && (
//         <div className="w-full h-48 bg-gray-200 animate-pulse rounded-lg"></div>
//       )}
//     </div>
//   );
// };

// // Komponen LazyVideo untuk lazy loading video
// const LazyVideo = ({ src, poster, className, onLoad }) => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isInView, setIsInView] = useState(false);
//   const videoRef = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const handleLoad = () => {
//     setIsLoaded(true);
//     onLoad && onLoad();
//   };

//   return (
//     <div ref={videoRef} className={className}>
//       {isInView && (
//         <>
//           <video
//             src={src}
//             poster={poster}
//             onLoadedData={handleLoad}
//             controls
//             muted
//             className={`w-full h-auto transition-opacity duration-300 ${
//               isLoaded ? 'opacity-100' : 'opacity-0'
//             }`}
//           />
//           {!isLoaded && (
//             <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
//           )}
//         </>
//       )}
//       {!isInView && (
//         <div className="w-full h-48 bg-gray-200 animate-pulse rounded-lg"></div>
//       )}
//     </div>
//   );
// };

// // Komponen MasonryItem untuk setiap item
// const MasonryItem = ({ item, onLoad }) => {
//   return (
//     <div className="masonry-item bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
//       <div className="relative">
//         {item.type === 'image' ? (
//           <LazyImage
//             src={item.src}
//             alt={item.alt}
//             className="relative"
//             onLoad={onLoad}
//           />
//         ) : item.type === 'video' ? (
//           <LazyVideo
//             src={item.src}
//             poster={item.poster}
//             className="relative"
//             onLoad={onLoad}
//           />
//         ) : (
//           <div className="p-4 min-h-[200px] bg-gradient-to-br from-blue-50 to-purple-50">
//             <div className="text-gray-800">{item.content}</div>
//           </div>
//         )}
//       </div>
      
//       {item.title && (
//         <div className="p-4">
//           <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
//           {item.description && (
//             <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
//           )}
//           {item.tags && (
//             <div className="flex flex-wrap gap-1 mt-2">
//               {item.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// // Komponen utama MasonryLayout
// const MasonryLayout = ({ 
//   data = [], 
//   loadMore, 
//   hasMore = true, 
//   loading = false,
//   columns = { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }
// }) => {
//   const [items, setItems] = useState(data);
//   const [loadedItems, setLoadedItems] = useState(new Set());
//   const containerRef = useRef();
//   const loadingRef = useRef();

//   // Update items ketika data berubah
//   useEffect(() => {
//     setItems(data);
//   }, [data]);

//   // Intersection Observer untuk infinite scroll
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && hasMore && !loading && loadMore) {
//           loadMore();
//         }
//       },
//       { threshold: 1.0 }
//     );

//     if (loadingRef.current) {
//       observer.observe(loadingRef.current);
//     }

//     return () => observer.disconnect();
//   }, [hasMore, loading, loadMore]);

//   // Handle item loaded untuk masonry layout
//   const handleItemLoad = useCallback((index) => {
//     setLoadedItems(prev => new Set([...prev, index]));
//   }, []);

//   // CSS untuk masonry layout responsif
//   const masonryStyles = {
//     display: 'grid',
//     gridTemplateColumns: `repeat(${columns.xs}, 1fr)`,
//     gap: '16px',
//     '@media (min-width: 640px)': {
//       gridTemplateColumns: `repeat(${columns.sm}, 1fr)`,
//     },
//     '@media (min-width: 768px)': {
//       gridTemplateColumns: `repeat(${columns.md}, 1fr)`,
//     },
//     '@media (min-width: 1024px)': {
//       gridTemplateColumns: `repeat(${columns.lg}, 1fr)`,
//     },
//     '@media (min-width: 1280px)': {
//       gridTemplateColumns: `repeat(${columns.xl}, 1fr)`,
//     }
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-8">
//       <div 
//         ref={containerRef}
//         className="masonry-container grid gap-4"
//         style={{
//           gridTemplateColumns: `repeat(1, 1fr)`,
//         }}
//       >
//         <style jsx>{`
//           .masonry-container {
//             grid-template-columns: repeat(1, 1fr);
//           }
          
//           @media (min-width: 640px) {
//             .masonry-container {
//               grid-template-columns: repeat(${columns.sm}, 1fr);
//             }
//           }
          
//           @media (min-width: 768px) {
//             .masonry-container {
//               grid-template-columns: repeat(${columns.md}, 1fr);
//             }
//           }
          
//           @media (min-width: 1024px) {
//             .masonry-container {
//               grid-template-columns: repeat(${columns.lg}, 1fr);
//             }
//           }
          
//           @media (min-width: 1280px) {
//             .masonry-container {
//               grid-template-columns: repeat(${columns.xl}, 1fr);
//             }
//           }
          
//           .masonry-item {
//             break-inside: avoid;
//             margin-bottom: 16px;
//           }
          
//           .line-clamp-2 {
//             display: -webkit-box;
//             -webkit-line-clamp: 2;
//             -webkit-box-orient: vertical;
//             overflow: hidden;
//           }
//         `}</style>
        
//         {items.map((item, index) => (
//           <MasonryItem
//             key={item.id || index}
//             item={item}
//             onLoad={() => handleItemLoad(index)}
//           />
//         ))}
//       </div>

//       {/* Loading indicator */}
//       {loading && (
//         <div className="flex justify-center items-center py-8">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
//           <span className="ml-2 text-gray-600">Loading more items...</span>
//         </div>
//       )}

//       {/* Infinite scroll trigger */}
//       <div ref={loadingRef} className="h-4"></div>

//       {/* No more items message */}
//       {!hasMore && items.length > 0 && (
//         <div className="text-center py-8 text-gray-500">
//           No more items to load
//         </div>
//       )}
//     </div>
//   );
// };

// export default MasonryLayout;