import { In, Repository } from "typeorm";

export const saveMultipleEntities = async <T, P>(input: T[], repository: Repository<P>, key: keyof P) => {
  const savedEntities = await repository.save(input, { chunk: 200 });
  if (savedEntities.length === 0) return [];
  return repository.find({
    where: [
      {
        [key]: In(savedEntities.map((e) => e[key])),
      },
    ],
  });
};

export const saveSingleEntity = async <T, P>(input: T, repository: Repository<P>, key: keyof P) => {
  console.log("HOHOHO", JSON.stringify(input, null, 2));
  const savedEntity = await repository.save(input, { chunk: 200 });
  console.log("HIHIHI", JSON.stringify(savedEntity, null, 2));
  const fullEntity = await repository.findOne({
    where: [
      {
        [key]: savedEntity[key],
      },
    ],
  });
  if (!fullEntity) throw new Error(`A problem happened while saving ${JSON.stringify(input, null, 2)}`);
  return fullEntity;
};
