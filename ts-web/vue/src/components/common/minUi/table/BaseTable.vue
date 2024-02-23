<template>
    <div class="container mx-auto mt-8">
      <table class="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th v-for="(column, index) in columns" :key="index" class="border border-gray-300 px-4 py-2">{{ column }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, personIndex) in people" :key="personIndex">
            <td v-for="(column, columnIndex) in columns" :key="columnIndex" class="border border-gray-300 px-4 py-2">{{ person[column] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        columns: ['Name', 'Age', 'Email'], // 列名数组
        people: [
          { Name: 'John Doe', Age: 30, Email: 'john@example.com' },
          { Name: 'Jane Doe', Age: 25, Email: 'jane@example.com' },
          { Name: 'Bob Smith', Age: 40, Email: 'bob@example.com' },
          { Name: 'Alice Johnson', Age: 35, Email: 'alice@example.com' },
        ]
      }
    }
  }
  </script>
  
  <style>
  /* You can customize styles further here if needed */
  </style>
  