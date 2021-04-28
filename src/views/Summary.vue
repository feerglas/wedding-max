<template>
  <div class="container">
    <h1>Anmeldungen</h1>
    <p>
      <router-link to="/">Zurück zur Home</router-link>
    </p>

    <p v-if="error">Bei der Abfrage gab es einen Fehler. Bitte erneut versuchen.</p>

    <h2 v-if="this.registrations.length > 0">Zusammenfassung</h2>
    <table class="summary-table" v-if="this.registrations.length > 0">
      <tr v-for="(item, id) in summary" :key="id">
        <td>{{item.description}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>

    <h2 v-if="this.registrations.length > 0">Details</h2>
    <table v-if="!error && registrations.length > 0">
      <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Get together</th>
          <th>Feier</th>
          <th>Essen</th>
          <th>Allergien</th>
          <th>Person 2</th>
          <th>Essen</th>
          <th>Allergien</th>
      </tr>
       <tr v-for="reg in registrations" :key="reg.id">
         <td>
           {{reg.timestamp.toDate().toLocaleDateString()}},
           {{reg.timestamp.toDate().toLocaleTimeString()}}</td>
         <td>{{reg.name}}</td>
         <td>{{reg.getTogether.join ? reg.getTogether.persons : '-'}}</td>
         <td>{{reg.wedding.join ? reg.wedding.persons : '-'}}</td>
         <td>{{reg.wedding.join ? reg.wedding.food : '-'}}</td>
         <td>{{
           reg.wedding.join && reg.wedding.alergics.length > 0 ? reg.wedding.alergics : '-'
         }}</td>
         <td>{{reg.wedding.persons === '2' ? reg.wedding.person2.name : '-'}}</td>
         <td>{{reg.wedding.persons === '2' ? reg.wedding.person2.food : '-'}}</td>
         <td>{{
           reg.wedding.persons === '2' && reg.wedding.person2.alergics.length > 0
            ? reg.wedding.person2.alergics
            : '-'
         }}</td>

       </tr>
    </table>

    <p v-if="this.registrations.length < 1">Noch keine An- oder Abmeldungen. 🤷‍♂️</p>
  </div>
</template>

<script>
import { registrations } from '@/firebase/';

export default {
  name: 'Summary',
  components: {},
  data() {
    return {
      error: false,
      registrations: [],
    };
  },
  computed: {
    summary() {
      const items = {
        totalInteractions: {
          description: 'Anzahl ausgefüllter Formulare',
          value: this.registrations.length,
        },
        cancel: {
          description: 'Total Abmledungen',
          value: 0,
        },
        getTogether: {
          description: 'Personen Get Together',
          value: 0,
        },
        wedding: {
          description: 'Personen Hochzeitsfeier',
          value: 0,
        },
        fish: {
          description: 'Fisch',
          value: 0,
        },
        meat: {
          description: 'Fleisch',
          value: 0,
        },
        vegi: {
          description: 'Vegi',
          value: 0,
        },
      };

      this.registrations.forEach((reg) => {
        if (!reg.getTogether.join && !reg.wedding.join) {
          items.cancel.value += 1;
        }

        if (reg.getTogether.join) {
          items.getTogether.value += parseInt(reg.getTogether.persons, 10);
        }

        if (reg.wedding.join) {
          items.wedding.value += parseInt(reg.wedding.persons, 10);

          if (reg.wedding.food === 'Fleisch') {
            items.meat.value += 1;
          } else if (reg.wedding.food === 'Fisch') {
            items.fish.value += 1;
          } else if (reg.wedding.food === 'Vegetarisch') {
            items.vegi.value += 1;
          }

          if (reg.wedding.person2.food.length >= 0) {
            if (reg.wedding.person2.food === 'Fleisch') {
              items.meat.value += 1;
            } else if (reg.wedding.person2.food === 'Fisch') {
              items.fish.value += 1;
            } else if (reg.wedding.person2.food === 'Vegetarisch') {
              items.vegi.value += 1;
            }
          }
        }
      });

      return items;
    },
  },
  created() {
    try {
      registrations
        .orderBy('timestamp', 'desc')
        .onSnapshot((data) => {
          const items = data.docs.map((doc) => {
            const item = doc.data();

            item.id = doc.id;

            return item;
          });

          this.registrations = items;
        });
    } catch {
      this.error = true;
    }
  },
};
</script>

<style scoped lang="scss">
.container {
  padding: 1rem;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin: 2rem 0;
}

td, th {
  border: 1px solid black;
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: rgba(1, 1, 1, 0.1);
}

.summary-table {
  width: auto;
}
</style>
