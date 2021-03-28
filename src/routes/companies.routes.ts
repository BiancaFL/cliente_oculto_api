import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CompaniesRepository from '../repositories/CompaniesRepository';
import CreateCompanyService from '../services/CreateCompanyService';

const companiesRouter = Router();

companiesRouter.get('/', async (req, res) => {
  const companiesRepository = getCustomRepository(CompaniesRepository);
  const companies = await companiesRepository.find();
  return res.json(companies);
});

companiesRouter.post('/', async (req, res) => {
  try {
    const { name, logo, address, culinary } = req.body;

    const createCompany = new CreateCompanyService();

    const company = await createCompany.execute({
      name,
      logo,
      address,
      culinary,
    });
    return res.json(company);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default companiesRouter;
