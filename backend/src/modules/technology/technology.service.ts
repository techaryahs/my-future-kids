import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTechnologyDto } from './dto/create-technology.dto.js';
import { UpdateTechnologyDto } from './dto/update-technology.dto.js';

interface Technology {
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon?: string;
  image?: string;
  features?: string[];
  displayOrder: number;
  isActive: boolean;
}

@Injectable()
export class TechnologyService {
  private technologies: Technology[] = [
    {
      id: 1,
      name: 'Robotics',
      slug: 'robotics',
      shortDescription: 'Hands-on learning through intelligent machines.',
      description:
        'Students explore robotics through building, programming, and problem-solving activities.',
      icon: 'Bot',
      features: ['Robot Building', 'Sensors', 'Motors', 'Automation'],
      displayOrder: 1,
      isActive: true,
    },
    {
      id: 2,
      name: 'Artificial Intelligence',
      slug: 'artificial-intelligence',
      shortDescription: 'Introducing students to the power of AI.',
      description:
        'Students learn the fundamentals of artificial intelligence and explore real-world applications.',
      icon: 'Brain',
      features: ['Machine Learning', 'AI Tools', 'Computer Vision'],
      displayOrder: 2,
      isActive: true,
    },
    {
      id: 3,
      name: 'AR & VR',
      slug: 'ar-vr',
      shortDescription: 'Immersive learning beyond traditional classrooms.',
      description:
        'Students experience concepts through interactive augmented and virtual reality.',
      icon: 'Glasses',
      features: ['Virtual Labs', '3D Exploration', 'Immersive Learning'],
      displayOrder: 3,
      isActive: true,
    },
  ];

  create(createTechnologyDto: CreateTechnologyDto): Technology {
    const technology: Technology = {
      id: this.technologies.length + 1,
      name: createTechnologyDto.name,
      slug: createTechnologyDto.slug,
      shortDescription: createTechnologyDto.shortDescription,
      description: createTechnologyDto.description,
      icon: createTechnologyDto.icon,
      image: createTechnologyDto.image,
      features: createTechnologyDto.features ?? [],
      displayOrder:
        createTechnologyDto.displayOrder ?? this.technologies.length + 1,
      isActive: createTechnologyDto.isActive ?? true,
    };

    this.technologies.push(technology);

    return technology;
  }

  findAll(): Technology[] {
    return this.technologies
      .filter((technology) => technology.isActive)
      .sort((a, b) => a.displayOrder - b.displayOrder);
  }

  findOne(id: number): Technology {
    const technology = this.technologies.find(
      (technology) => technology.id === id,
    );

    if (!technology) {
      throw new NotFoundException(`Technology with ID ${id} not found`);
    }

    return technology;
  }

  update(id: number, updateTechnologyDto: UpdateTechnologyDto): Technology {
    const technology = this.findOne(id);

    Object.assign(technology, updateTechnologyDto);

    return technology;
  }

  remove(id: number) {
    const index = this.technologies.findIndex(
      (technology) => technology.id === id,
    );

    if (index === -1) {
      throw new NotFoundException(`Technology with ID ${id} not found`);
    }

    this.technologies.splice(index, 1);

    return {
      message: 'Technology deleted successfully',
    };
  }
}
