import { personRepository } from "../models/person.js";

export const createPerson = async (req, res) => {
  const { firstname, lastname, age, email, password } = req.body;
  try {
    const data = {
      firstname,
      lastname,
      age,
      email,
      password,
    };

    const person = await personRepository.createAndSave(data);

    return res.status(201).json({
      status: "Success",
      message: `${firstname}, welcome to redis_db 😊😊😊`,
      person,
    });
  } catch (error) {
    return res.status(500).json({ status: "Failed", message: error.message });
  }
};
