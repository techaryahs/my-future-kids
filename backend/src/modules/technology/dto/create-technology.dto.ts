export class CreateTechnologyDto {
  name: string;

  slug: string;

  shortDescription: string;

  description: string;

  icon?: string;

  image?: string;

  features?: string[];

  displayOrder?: number;

  isActive?: boolean;
}
