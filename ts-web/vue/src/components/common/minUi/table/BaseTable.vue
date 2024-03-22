<template>
  <div class="container mx-auto mt-8">
    <table class="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-100">
          <th v-for="(column, index) in tableInfo.columns" :key="index" class="border border-gray-300 px-4 py-2">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person, personIndex) in tableInfo.list" :key="personIndex">
          <td v-for="(column, columnIndex) in tableInfo.columns" :key="columnIndex" class="border border-gray-300 px-4 py-2">{{
            person[column] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script setup lang="ts">
import { reactive } from 'vue';
const tableInfo = reactive({
  columns: ['Name', 'Age', 'Email'], // 列名数组
  list: [
    { Name: 'John Doe', Age: 30, Email: 'john@example.com' },
    { Name: 'Jane Doe', Age: 25, Email: 'jane@example.com' },
    { Name: 'Bob Smith', Age: 40, Email: 'bob@example.com' },
    { Name: 'Alice Johnson', Age: 35, Email: 'alice@example.com' },
  ] as any
})

</script>
  
<style>
/* You can customize styles further here if needed */
</style>
  