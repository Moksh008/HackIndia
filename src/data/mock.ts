// Mock data for the dashboard component

export interface Property {
  id: string;
  title: string;
  location: string;
  creator: string;
  image: string;
  backgroundColor?: string;
  propertyType: string;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  likes: number;
  views: number;
  roi: string;
  sharePrice: number;
  currency: string;
  availableShares: number;
}

export interface UserType {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isFollowing: boolean;
  followers: number;
  totalInvested: number;
  totalProperties: number;
  portfolioValue: number;
  monthlyIncome: number;
}

export interface Activity {
  id: string;
  title: string;
  image: string;
  price: number;
  currency: string;
  shares: number;
  time: string;
  status?: string;
}

export interface EthereumActivity {
  amount: number;
  currency: string;
  time: string;
}

export const mockUser: UserType = {
  id: "1",
  name: "John Doe",
  username: "@johndoe",
  avatar: "/logo.png",
  isFollowing: false,
  followers: 1234,
  totalInvested: 50000,
  totalProperties: 12,
  portfolioValue: 125000,
  monthlyIncome: 2500,
};

export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Modern Downtown Apartment",
    location: "New York, NY",
    creator: "Real Estate Co.",
    image: "/property-1.jpg",
    backgroundColor: "#FF6B6B",
    propertyType: "Apartment",
    sqft: 1200,
    bedrooms: 2,
    bathrooms: 2,
    likes: 156,
    views: 2340,
    roi: "8.5%",
    sharePrice: 250,
    currency: "USD",
    availableShares: 100,
  },
  {
    id: "2",
    title: "Luxury Villa",
    location: "Los Angeles, CA",
    creator: "Premium Properties",
    image: "/property-2.jpg",
    backgroundColor: "#4ECDC4",
    propertyType: "Villa",
    sqft: 3500,
    bedrooms: 4,
    bathrooms: 3,
    likes: 289,
    views: 4560,
    roi: "12.3%",
    sharePrice: 500,
    currency: "USD",
    availableShares: 50,
  },
  {
    id: "3",
    title: "Beachfront Condo",
    location: "Miami, FL",
    creator: "Ocean View Realty",
    image: "/property-3.jpg",
    backgroundColor: "#45B7D1",
    propertyType: "Condo",
    sqft: 1800,
    bedrooms: 3,
    bathrooms: 2,
    likes: 198,
    views: 3120,
    roi: "9.7%",
    sharePrice: 350,
    currency: "USD",
    availableShares: 75,
  },
];

export const heroProperties: Property[] = mockProperties.slice(0, 3);

export const mockActivities: Activity[] = [
  {
    id: "1",
    title: "Modern Downtown Apartment",
    image: "/property-1.jpg",
    price: 250,
    currency: "USD",
    shares: 10,
    time: "2 hours ago",
    status: "completed",
  },
  {
    id: "2",
    title: "Luxury Villa",
    image: "/property-2.jpg",
    price: 500,
    currency: "USD",
    shares: 5,
    time: "1 day ago",
    status: "pending",
  },
];

export const mockEthereumActivity: EthereumActivity[] = [
  {
    amount: 0.5,
    currency: "ETH",
    time: "2 hours ago",
  },
  {
    amount: 1.2,
    currency: "ETH",
    time: "1 day ago",
  },
];
