import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonItem = () => (
  <SkeletonTheme baseColor="#272E3B" highlightColor="#20222A">
    <div className="card">
      <Skeleton height="90px" containerClassName="card-image" />
      <p className="card-name">
        <Skeleton />
      </p>
      <span className="card-rarity">
        <Skeleton height="4px" />
      </span>
    </div>
  </SkeletonTheme>
);

const LoadingSkeleton = () => {
  return (
    <div className="item-cards">
      {Array.from({ length: 45 }).map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
