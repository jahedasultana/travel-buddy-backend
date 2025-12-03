export interface ICreateSubscription {
  type: 'MONTHLY' | 'YEARLY';
}

export interface ISubscriptionResponse {
  id: string;
  sessionId: string;
  url: string;
}

export interface IWebhookEvent {
  type: string;
  data: {
    object: {
      id: string;
      customer: string;
      subscription: string;
      amount_total: number;
      currency: string;
      payment_status: string;
    };
  };
}