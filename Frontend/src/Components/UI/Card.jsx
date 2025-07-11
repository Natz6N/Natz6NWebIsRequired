import { Eye, Star } from "@/Components/Icon";
import { Badge } from "@/Components/UI/badge";
import { DisplayRating } from "@/Components/Ratting";
import { TandaSeru } from "../Icon";
import useResponsive from "@/Hook/useResponsive"; // Sesuaikan path
import Ellipsis from "@/Components/Elipsis";
// Base Card Component
const Card = ({
  children,
  className = "",
  variant = "default",
  hover = true,
  shadow = "md",
  ...props
}) => {
  const variants = {
    default: "bg-white border border-gray-200",
    elevated: "bg-white",
    outlined: "bg-white border-2 border-gray-200",
    filled: "bg-gray-50 border border-gray-100",
    gradient: "bg-gradient-to-br from-white to-gray-50 border border-gray-100",
  };

  const shadows = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  const hoverEffect = hover
    ? "hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
    : "";

  return (
    <div
      className={`rounded-lg overflow-hidden ${variants[variant]} ${shadows[shadow]} ${hoverEffect} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Card Header
const CardHeader = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-6 pb-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

// Card Body
const CardBody = ({ children, className = "", ...props }) => {
  return (
    <div className={`px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

// Card Footer
const CardFooter = ({ children, className = "", ...props }) => {
  return (
    <div className={`px-6 py-4 pt-2 ${className}`} {...props}>
      {children}
    </div>
  );
};

// Card Image
const CardImage = ({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-[4/3]",
  ...props
}) => {
  return (
    <div className={`relative ${aspectRatio} overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        {...props}
      />
    </div>
  );
};

// Pinterest Style Card
const PinterestCard = ({
  image,
  title,
  description,
  badge,
  author,
  stats,
  onLike,
  onShare,
  onSave,
  className = "",
  ...props
}) => {
  return (
    <Card className={`max-w-[400px] min-w-[300px] ${className}`} {...props}>
      <div className="relative group">
        <CardImage src={image.src} alt={image.alt} aspectRatio="aspect-[4/3]" />

        {/* Overlay actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-2">
            <button
              onClick={onLike}
              className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
            >
              <Heart size={16} className="text-red-500" />
            </button>
            <button
              onClick={onShare}
              className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
            >
              <Share2 size={16} className="text-gray-700" />
            </button>
            <button
              onClick={onSave}
              className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
            >
              <Bookmark size={16} className="text-blue-500" />
            </button>
          </div>
        </div>

        {/* Badge overlay */}
        {badge && (
          <div className="absolute top-3 left-3">
            <Badge variant={badge.variant}>{badge.text}</Badge>
          </div>
        )}
      </div>

      <CardBody>
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{title}</h3>
        {description && (
          <p className="text-gray-600 text-sm line-clamp-3 mb-3">
            {description}
          </p>
        )}

        {/* Stats */}
        {stats && (
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            {stats.likes && (
              <span className="flex items-center gap-1">
                <Heart size={14} />
                {stats.likes}
              </span>
            )}
            {stats.views && (
              <span className="flex items-center gap-1">
                <Eye size={14} />
                {stats.views}
              </span>
            )}
            {stats.comments && (
              <span className="flex items-center gap-1">
                <MessageCircle size={14} />
                {stats.comments}
              </span>
            )}
          </div>
        )}

        {/* Author */}
        {author && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              {author.avatar ? (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User size={16} className="text-gray-500" />
              )}
            </div>
            <div>
              <p className="font-medium text-sm">{author.name}</p>
              {author.role && (
                <p className="text-xs text-gray-500">{author.role}</p>
              )}
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

// Product Card
const ProductCard = ({
  product,
  onAddToCart,
  onQuickView,
  className = "",
  ...props
}) => {
  return (
    <Card
      className={`w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[320px] flex flex-col ${className}`}
      {...props}
    >
      <div className="relative group">
        <CardImage
          src={product.image}
          alt={product.name}
          aspectRatio="aspect-square"
          className="object-cover w-full h-auto"
        />

        {/* Quick actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={onQuickView}
            className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
          >
            <Eye size={16} className="text-gray-700" />
          </button>
        </div>

      
      </div>

      <CardBody className="space-y-3 flex flex-col justify-between flex-grow p-4">
        {/* Title & Category */}
        <div>
          <h3 className="font-semibold text-base md:text-lg line-clamp-2">
            {product.name}
          </h3>
          <p className="text-gray-500 text-sm">{product.category}</p>
        </div>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1">
            <div className="flex">
              <DisplayRating rating={product.rating} totalStars={5} size={18} />
            </div>
            <span className="text-xs md:text-sm text-gray-500">
              ({product.reviews})
            </span>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 mt-3">
          <button
            onClick={onAddToCart}
            className="flex items-center justify-center bg-gray-200 text-gray-800 py-2 px-3 rounded-md hover:bg-blue-700 hover:text-white transition-colors w-full sm:w-fit"
          >
            <TandaSeru size={20} />
          </button>
          <button
            onClick={onQuickView}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors w-full"
          >
            Baca Selengkapnya
          </button>
        </div>
      </CardBody>
    </Card>
  );
};

// Article Card
const ArticleCard = ({ article, onRead, className = "", ...props }) => {
  return (
    <Card className={`max-w-[400px] ${className}`} {...props}>
      <CardImage
        src={article.image}
        alt={article.title}
        aspectRatio="aspect-[16/9]"
      />

      <CardBody className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="primary">{article.category}</Badge>
          <span className="text-sm text-gray-500">
            {article.readTime} min read
          </span>
        </div>

        <h3 className="font-bold text-xl line-clamp-2">{article.title}</h3>
        <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              {article.author.avatar ? (
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User size={16} className="text-gray-500" />
              )}
            </div>
            <div>
              <p className="font-medium text-sm">{article.author.name}</p>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <Calendar size={10} />
                {article.publishedAt}
              </p>
            </div>
          </div>

          <button
            onClick={onRead}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1"
          >
            Read more
            <ArrowRight size={14} />
          </button>
        </div>
      </CardBody>
    </Card>
  );
};

const EventCard = ({
  date,
  month,
  image,
  title,
  address,
  time,
  description,
}) => {
  const { isMobile, isDesktop } = useResponsive();
  return (
    <div className="flex px-2 md:px-0 flex-col md:flex-row gap-6 md:gap-10 py-6 border-b">
      {/* Date */}
      {isMobile && (
        <>
          <div className="w-full justify-between  flex items-center">
            <div className="flex-shrink-0 text-gray-700 px-4 md:px-0">
              <div className="text-xs uppercase">{month}</div>
              <div className="text-3xl font-bold">{date}</div>
            </div>
            <h3 className="text-xl font-semibold max-w-[200px] text-gray-800 mb-1">
              {title}
            </h3>
          </div>
        </>
      )}
      {isDesktop && (
        <>
          <div className="flex-shrink-0 w-full md:w-20 md:text-center text-gray-700 px-4 md:px-0">
            <div className="text-xs uppercase">{month}</div>
            <div className="text-3xl font-bold">{date}</div>
          </div>
        </>
      )}
      {/* Image */}
      <div className="w-full md:w-[300px] lg:w-[400px]">
        <img
          src={image}
          alt="Event"
          className="w-full h-[200px] md:h-full object-cover md:rounded-md"
        />
      </div>

      {/* Content */}
      <div className="flex-1 mt-4 md:mt-0">
        {isDesktop && (
          <>
            <h3 className="text-xl font-semibold max-w-[200px] text-gray-800 mb-1">
              {title}
            </h3>
          </>
        )}
        <p className="text-sm md:text-base text-gray-500">{address}</p>
        <p className="text-sm md:text-base text-gray-500 mb-2">{time}</p>

        <Ellipsis lines={2} showTooltip={false}>
          <p className="text-sm md:text-base text-gray-600">{description}</p>
        </Ellipsis>

        <button className="mt-3 text-sm text-blue-600 font-semibold hover:underline">
          View Event Details →
        </button>
      </div>
    </div>
  );
};

// Profile Card
const ProfileCard = ({
  profile,
  onFollow,
  onMessage,
  className = "",
  ...props
}) => {
  return (
    <Card className={`max-w-[300px] text-center ${className}`} {...props}>
      <CardBody className="space-y-4">
        <div className="relative">
          <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <User size={32} className="text-gray-500" />
            )}
          </div>
          {profile.isOnline && (
            <div className="absolute bottom-0 right-1/2 transform translate-x-6">
              <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          )}
        </div>

        <div>
          <h3 className="font-bold text-lg">{profile.name}</h3>
          <p className="text-gray-600">{profile.title}</p>
          {profile.location && (
            <p className="text-sm text-gray-500 flex items-center justify-center gap-1 mt-1">
              <MapPin size={12} />
              {profile.location}
            </p>
          )}
        </div>

        <div className="flex justify-center gap-8 text-center">
          <div>
            <p className="font-bold text-lg">{profile.followers}</p>
            <p className="text-sm text-gray-600">Followers</p>
          </div>
          <div>
            <p className="font-bold text-lg">{profile.following}</p>
            <p className="text-sm text-gray-600">Following</p>
          </div>
          <div>
            <p className="font-bold text-lg">{profile.posts}</p>
            <p className="text-sm text-gray-600">Posts</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={onFollow}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            {profile.isFollowing ? "Following" : "Follow"}
          </button>
          <button
            onClick={onMessage}
            className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors font-medium"
          >
            Message
          </button>
        </div>
      </CardBody>
    </Card>
  );
};

export {
  ProductCard,
  ArticleCard,
  ProfileCard,
  PinterestCard,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  EventCard,
};
