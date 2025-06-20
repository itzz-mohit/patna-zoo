export interface TreeDetails {
  id: number;
  name: string;
  scientificName: string;
  family: string;
  commonNames: string;
  origin: string;
  appearance: string;
  uses: string[];
  environmentalBenefits: string[];
  funFact: string;
  wikipediaUrl: string;
  slug: string;
  imageName: string;
}

export interface Tree {
  name: string;
  scientificName: string;
  slug: string;
}
