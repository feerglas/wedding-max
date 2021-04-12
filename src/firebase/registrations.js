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

const addRegistration = async (registration) => {
  try {
    await registrations.add(registration);
    return true;
  } catch {
    return false;
  }
};

export {
  addRegistration,
  getRegistrations,
};
