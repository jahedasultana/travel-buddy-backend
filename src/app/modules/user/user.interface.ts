export interface IUpdateUser {
  fullName?: string;
  bio?: string;
  currentLocation?: string;
  visitedCountries?: string[];
  travelInterests?: string[];
}

export interface IUserProfile {
  id: string;
  email: string;
  fullName: string;
  profileImage?: string;
  bio?: string;
  currentLocation?: string;
  visitedCountries: string[];
  travelInterests: string[];
  role: string;
  isSubscribed: boolean;
  isVerified: boolean;
  averageRating: number;
  totalReviews: number;
  createdAt: Date;
}