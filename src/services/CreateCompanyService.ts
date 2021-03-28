import { getRepository } from 'typeorm';

import Company from '../models/Company';

interface Request {
  name: string;
  logo: string;
  address: string;
  culinary: string;
}

class CreateCompanyService {
  public async execute({
    name,
    logo,
    address,
    culinary,
  }: Request): Promise<Company> {
    const companiesRepository = getRepository(Company);

    const company = companiesRepository.create({
      name,
      logo,
      address,
      culinary,
    });
    await companiesRepository.save(company);

    return company;
  }
}

export default CreateCompanyService;
