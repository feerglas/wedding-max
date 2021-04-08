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
  // check if entry already exists
  const nameToSubmit = registration.person1.name;
  let alreadyThere = false;

  const data = await getRegistrations();
  data.forEach((item) => {
    if (item.person1.name === nameToSubmit) {
      alreadyThere = true;
    }

    if (item.person2 && item.person2.name === nameToSubmit) {
      alreadyThere = true;
    }
  });

  if (alreadyThere) {
    return;
  }

  await registrations.add(registration);

  /*
  await registrations.add({
    person1: {
      name: 'Hans Muster 2',
      food: 'Pasta',
      alergics: false,
      gettogether: true,
      wedding: true,
    },
    person2: {
      name: 'Petra Muster',
      food: 'Fries',
      alergics: 'Some of them, like Fish, Lactose',
      gettogether: false,
      wedding: true,
    },
  });
  */
};

export {
  addRegistration,
  getRegistrations,
  registrationsSummary,
};
