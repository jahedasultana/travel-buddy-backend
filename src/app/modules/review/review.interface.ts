export interface ICreateReview {
  revieweeId: string;
  rating: number;
  comment?: string;
}

export interface IUpdateReview {
  rating?: number;
  comment?: string;
}

export interface IReviewResponse {
  id: string;
  rating: number;
  comment?: string;
  createdAt: Date;
  reviewer: {
    id: string;
    fullName: string;
    profileImage?: string;
  };
  reviewee: {
    id: string;
    fullName: string;
    profileImage?: string;
  };
}