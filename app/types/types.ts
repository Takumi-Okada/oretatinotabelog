type User = {
    id: string;
    name: string;
    thumbnail: string;
}

type RestaurantFormData = {
    userId: string;
    genre: string;
    name: string;
    url: string;
}

type EvaluationFormData = {
    userId: string;
    restaurantId: string;
    cost: number;
    taste: number;
    service: number;
    atmosphere: number;
}

type Restaurant = {
    id: string;
    userId: string;
    genre: string;
    name: string;
    url: string;
    user: User;
    evaluations: Evaluation[];
}

type Evaluation = {
    id: string;
    userId: string;
    restaurantId: string;
    cost: number;
    taste: number;
    service: number;
    atmosphere: number;
    user: User;
    restaurant: Restaurant;
}

export type { User, RestaurantFormData, EvaluationFormData, Restaurant, Evaluation};