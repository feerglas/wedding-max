import { registrations } from '@/firebase/';

const getRegistrations = async () => {
  try {
    const data = await registrations.get();

    const items = data.docs.map((doc) => {
      const item = doc.data();

      item.id = doc.id;

      return item;
    });

    return items;
  } catch {
    return [];
  }
};

const registrationsSummary = async () => {
  const items = await getRegistrations();
  let registeredPeople = 0;

  items.forEach((item) => {
    if (item.person2) {
      registeredPeople += 2;
    } else {
      registeredPeople += 1;
    }
  });

  return registeredPeople;
};

const addRegistration = async (registration) => {
  await registrations.add(registration);
};

export {
  addRegistration,
  getRegistrations,
  registrationsSummary,
};
