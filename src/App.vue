<script setup lang="ts">
import { db } from  './firebase'
import { ref, onMounted } from  'vue'
import { collection, getDocs } from  'firebase/firestore'

const  contacts  =  ref([])
onMounted(async () => {
  const  querySnapshot  =  await  getDocs(collection(db,  'contacts' ))
  contacts.value  =  querySnapshot.docs.map(doc => doc.data())
})
</script>

<template>
    <div>
        <h1>Contacts</h1>
        <h3 v-for="contact in contacts" :key="contact.id">{{ contact.name}}</h3>
        <p v-for="contact in contacts" :key="contact.id">
            {{ contact.email }}
        </p>
    </div>
</template>
