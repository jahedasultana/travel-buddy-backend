export interface ICreateTravelPlan {
  destination: string;
  startDate: string;
  endDate: string;
  budgetMin?: number;
  budgetMax?: number;
  travelType: 'SOLO' | 'FAMILY' | 'FRIENDS' | 'COUPLE';
  description?: string;
  itinerary?: string;
}

export interface IUpdateTravelPlan {
  destination?: string;
  startDate?: string;
  endDate?: string;
  budgetMin?: number;
  budgetMax?: number;
  travelType?: 'SOLO' | 'FAMILY' | 'FRIENDS' | 'COUPLE';
  description?: string;
  itinerary?: string;
  isActive?: boolean;
}

export interface ITravelPlanResponse {
  id: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  budgetMin?: number;
  budgetMax?: number;
  travelType: string;
  description?: string;
  itinerary?: string;
  isActive: boolean;
  createdAt: Date;
  user: {
    id: string;
    fullName: string;
    profileImage?: string;
    isVerified: boolean;
  };
}