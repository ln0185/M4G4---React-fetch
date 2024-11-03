export interface PetImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface Location {
  name: string;
  address: string;
  photoUrl?: string;
}
